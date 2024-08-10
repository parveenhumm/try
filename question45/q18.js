"use strict";
//parveenhumaira
//date: 15 June, 2024
Object.defineProperty(exports, "__esModule", { value: true });
//Seeing the World: Think of at least five places you’d like to visit.
//Explain & TIP: Arrays can be ordered and reordered in various ways without altering the 
//original list, useful for planning and organizing information.
let places = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original order:", places);
//printing original places 
console.log("Alphabetical order:", [...places].sort());
//This line sorts a copy of the places array alphabetically and prints the sorted array.
// The [...] operator is called the spread syntax and it creates a new array from the elements
// of places. The .sort() method sorts the elements of the array alphabetically by default.
console.log("Original order:", places);
//pprinting original array
console.log("Reverse alphabetical order:", [...places].sort().reverse());
//This line is similar to the second line, but after sorting the copied array, 
//it uses the .reverse() method to reverse the order and then prints it with a 
//label "Reverse alphabetical order:".
console.log("Original order:", places);
//printing original array
places.reverse();
console.log("Reversed order:", places);
//This line reverses the order of the elements directly in the places array using the
// .reverse() method and prints the reversed order to the console.
places.reverse();
console.log("Original order:", places);
//This line reverses the order of the elements in the places array again, effectively 
//restoring it to the original order, and prints the original order to the console.
places.sort();
console.log("Alphabetical order:", places);
//This line sorts the elements of the places array directly (modifying the original array) 
//using the .sort() method and prints the alphabetically sorted array to the console.
places.reverse();
console.log("Reverse alphabetical order:", places);
//This line reverses the elements in the places array, resulting in a reverse alphabetical order,
// and prints it to the console.
