"use strict";
//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mixedList = ['Amna', 2, 3, true, 'Biryani', false, '19', 19];
let onlyStrings = mixedList.filter(item => typeof item === "string");
console.log(onlyStrings);
