"use strict";
//Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
let numberList = [2, 4, 6, 8, 10, 15];
let newList = numberList.map(number => number * 2);
console.log(newList);
