//Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

import { describe } from "node:test";

let laptopFunc = {
    make: 'Lenovo',
    model: 'IdeaPad 5i Pro Gen 6 (14 intel)',
    year: '2022',
    describe: function(){
        console.log(`This is a gaming laptop verion ${this.model} made in year ${this.year}.`);
        
    }
};

laptopFunc.describe();

//Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let laptopArray = [
    { make: "Lenovo", model: "intel 14", year: 2022 },
    { make: "Hp", model: "EliteBook", year: 2019 },
    { make: "Apple", model: "MacBook Pro", year: 2021 }
];

console.log(laptopArray);


//Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let  pricesOfLaptops1 :number[] = [199999, 189999, 120000, 130000]
let  pricesOfLaptops2 :number[] = [299999, 170999, 130000, 140000]
let combinedPrices = [...pricesOfLaptops1, ...pricesOfLaptops2].sort((a, b) => a - b);
console.log(combinedPrices);
