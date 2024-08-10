//parveenhumaira
//date: 10 August, 2024

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// // • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// for each method used for simple comaprisions
//array1.filter(element => array2.includes(element)) :- used for comparing and checking similar eements

let currentUsers = ['Humaira' , 'Zartasha' ,'Admin' , 'Simra' , 'Hudaib' , 'Mubashir' , 'Ahmed']
let newUsers = ['Zarnab','zartasha' , 'Hudaib' , 'Zufisha' , 'Dua']
// //Approach #1(not case sensitive)
// let similar:string[] = currentUsers.filter(element => newUsers.includes(element));
// currentUsers.forEach(element => {
//     if (newUers.includes(element)) {
//       similar.push(element);
//       console.log(`Sorry ! It already exit. Select some other username`)
//     }
//     else{
//         console.log(`Username available`)
//     }
// });

//Approach # 2

function checkUsernames(currentUsers: string[], newUsers: string[]): void {
  for (const newUser of newUsers) {
    const lowercaseNewUsername = newUser.toLowerCase();

    if (currentUsers.some(currentUser => currentUser.toLowerCase() === lowercaseNewUsername)) {
      console.log(`Username ${newUser} is already taken. Please choose a different username.`);
    } else {
      console.log(`Username ${newUser} is available.`);
    }
  }
}

checkUsernames(currentUsers, newUsers);
