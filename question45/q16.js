"use strict";
//parveenhumaira
//date: 15 June, 2024
Object.defineProperty(exports, "__esModule", { value: true });
// More Guests: You've found a bigger dinner table, so there's room for more guests.
//Explain & TIP: When you have more space, you can add more guests to your list. You can add guests
// at the beginning, middle, and end of an array.
let guest_List = ["Jame clear", "Aristotle", "Shakespare"];
//adding at the End of list
guest_List.push("Benjamin Farnklin");
//adding at begining of list
guest_List.unshift("Plato");
// adding at the middle of list 
guest_List.splice(guest_List.length / 2, 0, "William");
guest_List.forEach(guest_List => {
    console.log("\nDear", `${[guest_List]}`, " We would be honored if you could join us for dinner at our home.");
});
