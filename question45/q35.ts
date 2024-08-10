//parveenhumaira
//date: 10 August, 2024

//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let  pet_animals : string[] = ['Cat' , 'Dog' , 'Rabbit'];
let description : string[] =['A cat is a quiet companion.', 'A dog would make a great pet.' , 'A rabbit is fluffy and cute.']
let i ;
for(i=0 ; i<pet_animals.length ; i++){
    console.log(pet_animals[i] + ":" + description[i])
}
   