"use strict";
function multipleTypes(valueOne, valueTwo) {
    return `Value 1: ${valueOne}, Value 2: ${valueTwo}`;
}
console.log(multipleTypes("Osama", 100)); // Value 1: Osama, Value 2: 100
//Generic Classes
class User {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
let userOne = new User("Elzero");
userOne.show("Hello"); // Hello - Elzero
