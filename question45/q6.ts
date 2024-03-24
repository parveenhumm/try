//Humaira parveen
//date:21 March,2024
//Question no.6 :- Stripping Names

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//  Make sure you use each character combination, "\t" and "\n", at least once.
//   Print the name once, so the whitespace around the name is displayed. 
//   Then print the name after striping the white spaces.
// Store a person's name with whitespace characters
let nameWithWhitespace: string = "\n\tJohn Doe \t\n ";

// Print the name with whitespace
console.log("Name with whitespace:");
console.log(`[${nameWithWhitespace}]`); // Using square brackets to highlight whitespace

// Print the name after stripping whitespace
let strippedName: string = nameWithWhitespace.trim();
console.log("\nName after stripping whitespace:");
console.log(`[${strippedName}]`);

