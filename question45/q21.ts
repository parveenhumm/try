//parveenhumaira
//date: 8 August, 2024

// Think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

// Explain & TIP: Objects in TypeScript can store various related data about a single entity.
// Think of an object as a container for characteristics of something, like a book or a car.
let book: {
  title: string;
  author: string;
  publicationYear: number;
  publisher: string;
  placeOfPublication: string;
} = {
  title: "Atomic Habits",
  author: "James Clear",
  publisher: "Penguin Random House",
  publicationYear: 2018,
  placeOfPublication: "United Kingdom",
};
console.log( `${book.author}. ${book.title}, ${book.placeOfPublication}: ${book.publisher} , ${book.publicationYear}`);
// acessing the property from object

