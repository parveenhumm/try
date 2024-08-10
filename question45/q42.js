"use strict";
//parveenhumaira
//date: 10 August, 2024
Object.defineProperty(exports, "__esModule", { value: true });
// Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by adding the 
//phrase the Great to each magician’s name. Call show_magicians() to see that the list has 
//actually been modified.
const magicians = ['David Copperfield', 'Penn Jillete', 'Teller', 'Criss Angel'];
const make_greet = (magicians) => {
    magicians.forEach(magician => console.log(`Hello! , ${magician}`));
};
make_greet(magicians);
