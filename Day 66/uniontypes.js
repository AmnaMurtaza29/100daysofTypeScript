"use strict";
//Day-66 of 100-Days-Of-Code  Challenge
/*Day-66 Task:
Learn about different TypeScript type system concepts by using the following guide and coding along with the examples provided in it:
TypeScript Type System Concepts*/
// 1. Union Types
function displayType(input) {
    if (typeof input === 'string') {
        console.log('Input is a string');
    }
    else {
        console.log('Input is a number');
    }
}
// 2. Literal Types
function printDirection(direction) {
    console.log(`Turning ${direction}`);
}
// 3. Nullable Types
let maybeNumber = 10;
maybeNumber = null;
