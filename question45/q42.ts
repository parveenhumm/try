//parveenhumaira
//date: 10 August, 2024

// Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by adding the 
//phrase the Great to each magician’s name. Call show_magicians() to see that the list has 
//actually been modified.

const magicians : string[] = ['David Copperfield' , 'Penn Jillete' , 'Teller' , 'Criss Angel'];
const make_greet= (magicians : string[]) : void => {
    magicians.forEach(magician => console.log(`Hello! , ${magician}`));}
    make_greet(magicians)