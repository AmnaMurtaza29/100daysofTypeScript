"use strict";
// Function that calculates the area of a rectangle
const calculateRectangleArea = (width, height) => {
    // Type annotations specify that width and height parameters are numbers
    // and the return value is also a number
    // Calculate the area by multiplying width and height
    const area = width * height;
    // Type annotation specifies that the variable 'area' is a number
    // Return the calculated area
    return area;
};
// Test the function with sample values
const width = 5;
const height = 3;
const area = calculateRectangleArea(width, height);
console.log(`The area of the rectangle with width ${width} and height ${height} is: ${area}`);
