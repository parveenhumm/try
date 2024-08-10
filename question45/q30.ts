//parveenhumaira
//date: 8 August, 2024

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
//Imagine you are writing code that will print a greeting to each user after they log in
// to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you 
//like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userName = ['Humaira' , 'Zartasha' ,'Admin' , 'Simra' , 'Hudaib' , 'Mubashir' , 'Ahmed']
let i = 0 ;
 for(i=0 ; i<=5 ;   i++)
   {
      if(userName[i] ==='Admin')//=== for precise checking
         {
      console.log(`Hello Admin, Would you like to see report??`)
         }
      else
         {
         console.log(`Welcome to our website , ${userName[i]}`)
         }
   }

    