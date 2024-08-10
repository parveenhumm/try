"use strict";
//parveenhumaira
//date: 8 August, 2024
Object.defineProperty(exports, "__esModule", { value: true });
// Intentional Error: Try to produce an array index error in one of 
//your programs. Correct the error before finishing.
// Explain & TIP: Array index errors happen when you try to access a position in
// the array that doesn’t exist. Experimenting with this helps you understand 
//array boundaries.
let array_friends = ["Alexa", "Charlie", "Simcheong", "Cathedra"];
console.log(array_friends[4]);
// Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
array_friends[3] = "Charlie";
// Correcting the error by accessing a valid index.
console.log(array_friends[3]);
