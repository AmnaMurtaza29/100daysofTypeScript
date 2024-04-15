"use strict";
//Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
// Create a Map to store country-capital pairs
let countryCapitalMap = new Map();
// Add countries and their capitals to the Map
countryCapitalMap.set("USA", "Washington D.C.");
countryCapitalMap.set("France", "Paris");
countryCapitalMap.set("Japan", "Tokyo");
// Test the Map by retrieving values
console.log("Capital of USA:", countryCapitalMap.get("USA"));
console.log("Capital of France:", countryCapitalMap.get("France"));
console.log("Capital of Japan:", countryCapitalMap.get("Japan"));
