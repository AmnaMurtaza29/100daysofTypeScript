"use strict";
//Question 92: Write a function to remove the last element from an array and return the removed element.
function removeLastElement(arr) {
    return arr.pop();
}
const fruits = ["Apple", "Grapes", "Mango"];
console.log(removeLastElement(fruits));
console.log(fruits);
