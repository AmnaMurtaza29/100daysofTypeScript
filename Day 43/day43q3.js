"use strict";
//Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
// Traditional function
// Traditional function
function traditionalFunction(arg1, arg2, arg3) {
    console.log(arguments); // Outputs: [1, 2, 3]
    console.log(traditionalFunction); // Outputs: Window object
}
// Arrow function
let arrowFunction = (...args) => {
    console.log(args); // Outputs: [1, 2, 3]
    console.log(arrowFunction); // Outputs: Window object (or global object in non-browser environments)
};
traditionalFunction(1, 2, 3);
arrowFunction(1, 2, 3);
