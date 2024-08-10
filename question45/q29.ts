//parveenhumaira
//date: 8 August, 2024

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ['Orange' , 'Apple' , 'Cherry'] 

 if(favorite_fruits.includes('Apple')){ 
    // arrayname.includes('finding element') : used to check included elements
        console.log(`You really likes apples`)}

if(favorite_fruits.includes('Orange')){
    console.log(`You really likes Orange`)}

if(favorite_fruits.includes('Cherry')){
                    console.log(`You really likes Cherry`)}

if(favorite_fruits.includes('Kiwi')){
                        console.log(`You really likes Kiwi`)}

if(favorite_fruits.includes('Bananas')){
                                console.log(`You really likes Bananas`)}