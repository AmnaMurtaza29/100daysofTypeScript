"use strict";
//Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
//Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.
function areStringsIdenticalIgnoreCase(str1, str2) {
    // Converting both strings to lowercase and then compare
    const lowercaseStr1 = str1.toLowerCase();
    const lowercaseStr2 = str2.toLowerCase();
    // Comparing the lowercase strings
    return lowercaseStr1 === lowercaseStr2;
}
// Testing the function
const string1 = "Hello";
const string2 = "hello";
console.log(`Strings "${string1}" and "${string2}" are identical (ignore case): ${areStringsIdenticalIgnoreCase(string1, string2)}`);
