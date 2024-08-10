"use strict";
//parveenhumaira
//date: 15 June, 2024
Object.defineProperty(exports, "__esModule", { value: true });
// Changing Guest List: One of your guests can't make it to the dinner, 
//so you need to send out a new set of invitations with a replacement guest.
//Explain & TIP: Arrays are flexible. You can replace an item if someone can't make it,
// then loop through the list again for new invitations.
let guest_List = ["Jame clear", "Buddha", "Aristotle", "Shakespare"];
guest_List.pop();
// removes last item from the array
guest_List.forEach(guest_List => {
    // acessing each element one by one 
    console.log("Dear", `${[guest_List]}`, " We would be honored if you could join us for dinner at our home on [Date] at [Time]");
});
