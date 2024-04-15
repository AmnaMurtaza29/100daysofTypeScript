"use strict";
//Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDivisibleBy2And3(number) {
    // Checking if the number is divisible by both 2 and 3
    return number % 2 === 0 && number % 3 === 0;
}
// Testing the function
const testNumber = 12;
console.log(`${testNumber} is divisible by both 2 and 3: ${isDivisibleBy2And3(testNumber)}`);
