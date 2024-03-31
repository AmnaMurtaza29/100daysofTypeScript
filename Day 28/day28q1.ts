//Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.

function stringLength(str: string): number {
    return str.length;
}

const myString = "Hello, world!";
let strlength = stringLength(myString);
console.log(`Length of the string "${myString}" is: ${strlength}`);
