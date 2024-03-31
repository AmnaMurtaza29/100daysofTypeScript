"use strict";
//Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
function extractFirstTenCharacters(inputString) {
    return inputString.slice(0, 10);
}
// Example usage:
const checkString = "This is a test string.";
const firstTenCharacters = extractFirstTenCharacters(checkString);
console.log("First 10 characters:", firstTenCharacters);
