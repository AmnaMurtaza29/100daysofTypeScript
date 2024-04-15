"use strict";
//Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
// Define a Map with student IDs and names
const studentMap = new Map();
studentMap.set(1, "John");
studentMap.set(2, "Emily");
studentMap.set(3, "Michael");
// Iterate over the Map using a for...of loop
for (const [id, name] of studentMap) {
    console.log(`Student ID: ${id}, Name: ${name}`);
}
