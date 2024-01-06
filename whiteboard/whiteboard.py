# Given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different
# data types.

#Examples:
# solution("bitcoin take over the world maybe who knows perhaps") ==> 3
# solution("turns out random test cases are easier than writing out basic ones") ==> 3
# solution("lets talk about javascript the best language") ==> 3
# solution("i want to travel the world writing code one day") ==> 1

def string_of_words(some_string):
    new_string = some_string.split()
    
    for string in new_string:
        min(len(string))
        new_string.append(string)
    return 

print(string_of_words("bitcoin take over the world maybe who knows perhaps"))