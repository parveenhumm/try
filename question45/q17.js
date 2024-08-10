"use strict";
//parveenhumaira
//date: 15 June, 2024
Object.defineProperty(exports, "__esModule", { value: true });
// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, 
//and you can only invite two guests.
//Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. 
//Removing guests from your list is straightforward but should be done thoughtfully.
let guest_List = ["Jame clear", "Aristotle", "Shakespare", "Plato"];
guest_List.pop();
//removes last element from the list
console.log(`\n${guest_List}`);
guest_List.slice(2, 1);
//removes first element and returns from second element till third one
console.log(`\n${guest_List}`);
console.log(guest_List.splice(1, 1));
// deleting from first element and 1 element after that
console.log(`\n${guest_List}`);
