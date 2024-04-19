"use strict";
//Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
let multiply = (...numbers) => {
    return numbers.reduce((acc, curr) => acc * curr, 1);
};
console.log(multiply(2, 3, 4)); // Output: 24
console.log(multiply(5, 10, 2)); // Output: 100
console.log(multiply(1, 2, 3, 4, 5)); // Output: 120
