"use strict";
//Question 101: Generate a random integer between 1 and 10.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomInt = getRandomInt(1, 10);
console.log("Random integer between 1 and 10:", randomInt);
