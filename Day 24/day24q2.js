"use strict";
//Day 24 Question No. 2.
//Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
let age = 18;
age = 19;
console.log(age);
const gameName = "Subway Surfers";
try {
    // gameName = "MineCraft"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}
