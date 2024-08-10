"use strict";
//parveenhumaira
//date: 12 June, 2024
Object.defineProperty(exports, "__esModule", { value: true });
// Name Cases: Store a person’s name in a variable, and then print that 
//person’s name in lowercase, uppercase, and titlecase.
let line = "AlL dEpEnDs On YoU ";
// Convert to uppercase
let upperCaseStr = line.toUpperCase(); // function for uppercase
console.log(upperCaseStr);
// Convert to lowercase
let lowerCaseStr = line.toLowerCase(); // function for lowercase
console.log(lowerCaseStr);
//convert to title case
function toTitleCase(sentence) {
    let titleCaseStr = ""; //store the title-cased sentence
    let isFirstChar = true; // is the first character of a word.
    //for loop
    //If the character is a space (' '), it indicates the beginning of a new word, 
    //so it sets isFirstChar to true again.
    for (let char of sentence) { //iterates through the words present
        if (isFirstChar) {
            titleCaseStr += char.toUpperCase();
            isFirstChar = false; //if the word is in lower case make it upper case  
        }
        else {
            titleCaseStr += char.toLowerCase();
        }
        if (char === ' ') {
            isFirstChar = true;
        }
    }
    return titleCaseStr;
}
let titleCaseStr1 = toTitleCase(line);
console.log(titleCaseStr1); //titlecase
