Given a string, determine if all of the characters in the string are unique or not. This function, allCharsUnique should return a Boolean value.

1. The problem: Given a string, determine whether or not any of the characters occur more than once.
    
    In/Out
- String: 'hello' -> Boolean: false // because the 'l' occurs more than once
- String: 'helo' -> Boolean: true // no characters are repeated

2. Strategy

    The string must be looped through character by character. An object can store each character as a key with the number of times that charcter has been found as a value. The instant that any value becomes greater than one, that means that character is not unique and a value of false can immediately be returned. If the loops goes through the whole string without any value increasing above one, a value of true can be returned.