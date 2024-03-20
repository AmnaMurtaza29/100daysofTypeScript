"use strict";
//Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
class SpecialAdder {
    constructor(specialNumber) {
        this.specialNumber = specialNumber;
        this.add = (numberToAdd) => numberToAdd + this.specialNumber;
    }
}
const customAdder = new SpecialAdder(7); // Creates an adder that adds 7
console.log(customAdder.add(10)); // Output: 17 (10 + 7)
console.log(customAdder.add(8)); // Output: 15 (8 + 7)
