"use strict";
//Day 21 Question No. 1.
//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["Car"] = 0] = "Car";
    vehicleType[vehicleType["Truck"] = 1] = "Truck";
    vehicleType[vehicleType["MotorCycle"] = 2] = "MotorCycle";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType);
