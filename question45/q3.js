//Humaira parveen
//date:21 March,2024
//Question no.3 :- Name Cases: Store a person’s name in a variable, and then print that 
//person’s name in lowercase, uppercase, and titlecase.
var str = "AlL dEpEnDs On YoU ";
// Convert to uppercase
var upperCaseStr = str.toUpperCase(); // function for uppercase
console.log(upperCaseStr);
// Convert to lowercase
var lowerCaseStr = str.toLowerCase(); // function for lowercase
console.log(lowerCaseStr);
//convert to title case
function toTitleCase(sentence) {
    var titleCaseStr = ""; //store the title-cased sentence
    var isFirstChar = true; // is the first character of a word.
    //for loop
    //If the character is a space (' '), it indicates the beginning of a new word, 
    //so it sets isFirstChar to true again.
    for (var _i = 0, sentence_1 = sentence; _i < sentence_1.length; _i++) { //iterates through the words present
        var char = sentence_1[_i];
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
var titleCaseStr1 = toTitleCase(str);
console.log(titleCaseStr1); //titlecase
