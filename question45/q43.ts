//parveenhumaira
//date: 10 August, 2024

//Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store 
//it in a separate array. Call show_magicians() with each array to show that you 
//have one array of the original names and one array with the Great added to each magician’s name.
function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
  }
  
  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => `The Great ${magician}`);
    return greatMagicians;
  }
  
  const magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Criss Angel"];
  
  // Create a copy of the original array
  const great_magicians = make_great([...magicians]);
  
  console.log("Original Magicians:");
  showMagicians(magicians);
  
  console.log("\nGreat Magicians:");
  showMagicians(great_magicians);
  