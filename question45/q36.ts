//parveenhumaira
//date: 10 August, 2024

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size : string, message:string){
   let available_size = ["Small", "Medium", "Large", "Extra Large"];
   if(available_size.includes(size)){
   console.log(`You ordered ${size} shirt with message : ${message}`)}
   else{
      console.log(`Invalid size. Please choose from: ${available_size.join(',')}`)
   }
}
make_shirt( "Small", "Happy independence day")