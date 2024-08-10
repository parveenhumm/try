//parveenhumaira
//date: 10 August, 2024

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const show_magicians = (magicians : string[]) : void => {
    magicians.forEach(magician => console.log(magician));
}

const magicians : string[] = ['David Copperfield' , 'Penn Jillete' , 'Teller' , 'Criss Angel'];
show_magicians(magicians);
