"use strict";
//Question 146: Show an example of a callback function used to filter an array of numbers.
// Define a callback function for filtering even numbers
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
// Example array of numbers
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Use the callback function to filter even numbers from the array
let evenNumbers = filterEvenNumbers(numbersArray);
console.log("Even numbers:", evenNumbers);
