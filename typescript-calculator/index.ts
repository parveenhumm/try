#! /usr/bin/env node
import inquirer from "inquirer"; // installing the package for my module
//prompt is the function use for taking input from user 
//message is question ask to user 
//type is nature of data
//name to store data so that it can be used in code
const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select operation to be performed",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
console.log(answer);
// conditional operator
if (answer.operator === "Addition") {
    //Your Added value is : (addition operation)
  console.log(
    "Your Added value is :" , answer.firstNumber + answer.secondNumber
  );
} else if (answer.operator === "Subtraction") {
    console.log(
        //Your Subtracted value is : ( subtraction operation)
      "Your Subtracted value is :" , answer.firstNumber - answer.secondNumber
    );
  }else if (answer.operator === "Multiplication") {
    console.log(
        //Your Multiplicated value is : (multiplication operation)
      "Your Multiplicated value is :" , answer.firstNumber * answer.secondNumber
    );
  }else if (answer.operator === "Division") {
    console.log(
      //Your Divided value is : (Division operation)
      "Your Divided value is :" , answer.firstNumber / answer.secondNumber
    );
  }
else{
    console.log("Please select the valid operation");
}