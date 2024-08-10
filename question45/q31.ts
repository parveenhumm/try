//parveenhumaira
//date: 10 August, 2024

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let userName = ['Humaira' , 'Zartasha' ,'Admin' , 'Simra' , 'Hudaib' , 'Mubashir' , 'Ahmed']
let i = 0 ;
 for(i=0 ; i<=6 ;   i++)
 {
   userName.pop()
 }
 console.log(userName)
console.log(`We need to find some Users`)