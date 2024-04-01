"use strict";
//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function filterNumbers(numbers) {
    return numbers.filter(number => number > 10);
}
let numbers = [16, 18, 19, 21, 22, 25];
console.log(filterNumbers(numbers));
