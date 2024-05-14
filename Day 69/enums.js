"use strict";
// Define an enum for colors
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
// Assign a color
const chosenColor = Colors.Green;
// Log the chosen color
console.log(`The chosen color is ${Colors[chosenColor]}`);
