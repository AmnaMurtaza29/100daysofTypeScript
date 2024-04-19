"use strict";
/*Question 135: Explain how you can format a JSON string with proper indentation for readability.

Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.
*/
// JavaScript object
let objectPerson = {
    name: "Fariya",
    age: 19,
    city: "Karachi"
};
// Convert JavaScript object to formatted JSON string with indentation
let jSonString = JSON.stringify(objectPerson, null, 2);
console.log(jSonString);
