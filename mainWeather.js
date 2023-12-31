//weather api creds
const apiKey = '514027022ed909a44b2f39ef64073393';
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather';

//add an .addeventlistener()

const weatherData = async () => {
    //weather api creds
    const weatherAPIKey = '514027022ed909a44b2f39ef64073393';
    const weatherLat = document.getElementById("latitude").value;
    const weatherLong = document.getElementById("longitude").value;

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${weatherLat}&lon=${weatherLong}&appid=${weatherAPIKey}`;
    // create a function to convert Kelvin to Fahrenheit
    function convertKelvinToFahrenheit(kelvin) {
        return (kelvin - 273.15) * 9 / 5 + 32;
        }

    // grab the data and display with innerHTML
    try {
        const weatherResponse = await fetch(weatherURL);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);

        const weatherHigh = convertKelvinToFahrenheit(weatherData.main.temp_max);
        const weatherLow = convertKelvinToFahrenheit(weatherData.main.temp_min);
        const weatherForecast = weatherData.weather[0].description;
        const weatherHumidity = weatherData.main.humidity;

        const weatherDisp = document.getElementById("weather-display");
        weatherDisp.innerHTML = `
            <h1>${weatherData.name} weather</h1>
            <p>High: ${weatherHigh}</p>
            <p>Low: ${weatherLow}</p>
            <p>Forecast: ${weatherForecast}</p>
            <p>Humidity: ${weatherHumidity}</p>
        `;
    } catch (error) {
        console.log("Can't find Weather data based on entry, please try again", error);
    }
};

