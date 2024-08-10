//parveenhumaira
//date: 8 August, 2024

// More Conditional Tests: Expand your conditional tests to cover a wider
// range of comparisons.

// Explain & TIP: Experiment with different types of conditions to see how they work.
// This builds a deeper understanding of logic in programming.
// Equality with strings
console.log("Testing equality with strings:");
const firstString: string = "apple";
const secondString: string = "apple";
console.log("firstString === secondString:", firstString === secondString); // True
console.log("firstString === 'Apple':", firstString === "Apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() === "apple"); // True

// Numerical tests
console.log("Numerical tests:");
const numberA: number = 10;
const numberB: number = 5;
console.log("numberA > numberB:", numberA > numberB); // True
console.log("numberB < numberA:", numberB < numberA); // True

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
const conditionTrue: boolean = true;
const conditionFalse: boolean = false;
console.log("conditionTrue && conditionFalse:", conditionTrue && conditionFalse); // False
console.log("conditionTrue || conditionFalse:", conditionTrue || conditionFalse); // True

// Test whether an item is in a array
const fruits: string[] = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
