"use strict";
//Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
function checkForJavaScriptPresence(inputString) {
    const searchString = "JavaScript";
    return inputString.includes(searchString);
}
// Example usage:
const tesTString = "I love programming in JavaScript!";
const isJavaScriptPresent = checkForJavaScriptPresence(tesTString);
console.log("Is 'JavaScript' present in the string?", isJavaScriptPresent);
