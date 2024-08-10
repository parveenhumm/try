//parveenhumaira
//date: 10 August, 2024

// Sandwiches: Write a function that accepts a array of items a person wants on 
//a sandwich. The function should have one parameter that collects as many items as the function
// call provides, and it should print a summary of the sandwich that is being ordered. Call the 
//function three times, using a different number of arguments each time.

//METHOD 1 :-
// Define the function to accept a variable number of sandwich items
let sandwich = (...items: string[]) => {
 console.log("---Sandwich Order Summary---");
 if(items.length === 0){
    console.log("--- NO ITEMS ORDERED ---")
 }else{
    items.forEach((items)=>{
       console.log(`${items}`);
    });
   }
   console.log("\n")
}
// Call the function three times with different numbers of arguments
sandwich("Ham", "Cheese", "Lettuce", "Tomato");

sandwich();

//METHOD 2:-
function Sandwich(ingredients: string[]): void {
    //void declares that the finction is not returninig any data 
    const sandwichSummary = `Your ordered sandwich includes: ${ingredients.join(',')}`;
    //join is the built-in method in array it separator is commas , dashes and spaces
    console.log(sandwichSummary);
  }
  
Sandwich(['bread', 'cheese', 'ham']);
  
Sandwich(['bread', 'lettuce', 'tomato', 'avocado']);
Sandwich([]);