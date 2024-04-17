"use strict";
//Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
let expression = "apple";
let result;
switch (expression) {
    case "banana":
        result = "It's a banana.";
        break;
    case "orange":
        result = "It's an orange.";
        break;
    case "kiwi":
        result = "It's a kiwi.";
        break;
    default:
        result = "It's something else.";
        break;
}
console.log(result); // Output: It's something else.
