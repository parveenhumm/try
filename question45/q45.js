"use strict";
//HumairaParveen-sys
//date: 12 June, 2024
Object.defineProperty(exports, "__esModule", { value: true });
// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two 
//other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information 
//was stored correctly.
// Define the function to store car information
let cars = (ModelName, manufacturer, ...options) => {
    // Create an object to store the car information
    let carInfo = {
        ModelName: ModelName,
        manufacturer: manufacturer,
    };
    // Add the additional key-value pairs to the carInfo object
    options.forEach(([key, value]) => {
        carInfo[key] = value;
    });
    return carInfo;
};
// Call the function with required information and additional key-value pairs
let car = cars("Toyota", "parado", ["color", " Blue"], ["sunroof", true], ["year", 2019]);
// Print the object to ensure all information is stored correctly
console.log(car);
