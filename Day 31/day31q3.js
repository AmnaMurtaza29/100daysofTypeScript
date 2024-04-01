"use strict";
//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replaceBananaWithMango(fruits) {
    const index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
let Fruits = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(Fruits);
console.log(Fruits);
