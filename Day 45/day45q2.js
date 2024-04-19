"use strict";
//Question 134: Take a JSON string and parse it into a JavaScript object.
// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.
// JSON string
let JsonString = '{"name":"John","age":30,"city":"New York"}';
// Parse JSON string into JavaScript object
let Person = JSON.parse(JsonString);
console.log(Person);
