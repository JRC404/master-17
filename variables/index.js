//* created a variables folder with an index.js inside of it
//* index or app.js will be your starter file 99 times out of 100
//* installed extensions: 
//* live server and live share

//* variable: storage places for our code
//* storing a value to use it again later on...

// let myName; // string variable
let myName = "Jacob Reilly-Cooper"; // declaration & definition
// myName = "Jacob Reilly-Cooper"; // defining the variable
// variable = vary - change it...
// constant - something that doesn't change


//* ; = end of a statement
let myAge = 55; // number variable
let myPlaceOfWork = "Code Nation"; // string variable
let happy = true; // boolean variable
let car = "Reliant Robin";
let hobbies = ["Listening to Miley Cyrus", "Talking about Miley Cyrus"]
let carAge = 20;
console.table(hobbies)

// declaration - let myName
// definition - "Jacob Reilly-Cooper"


// TODO: full sentence with your name / age or other in a console.log
//console.log("Hello, my name is " + myName + " and I am " + myAge + " years old."); 
// old fashioned way
// myName = "Dean Singleton"
//console.log(`Hello, my name is ${myName} and I am ${myAge} years old.`) // new fashioned way


// **********************************
console.log("My car is a " + car + ". Do you like it?"); // logs the variable myName to the console
console.log(`My car is a ${car}. Do you like it?`);
// string iterpolation

// TODO: create four variables with your details OR made up details

//* let Jacob Reilly-Cooper be stored in a box called myName
//* let is creating our variable
//* myName is the name of the variable
//* "value of the variable"

// console.log("Hello, my name is Blaze Reilly-Cooper, I am 56 years old. My car is Fiat 500, it is 1 years old and I am happy.")
// console.log("Hello, my name is Blaze Reilly-Cooper, I am 56 years old. My car is Fiat 500, it is 1 years old and I am happy.")

// console.log(myFavouriteDrink) //! ReferenceError: Cannot access 'myFavouriteDrink' before initialization
//? you have tried to access a variable before it has been declared and defined
let myFavouriteDrink = "Apple juice";
myFavouriteDrink = "Orange juice";
// let myfavouriteDrink = "Vimto";
// let myfavouritedrink = "Ribena";
// let MyFavouriteDrink = "Coffee";
// console.log(myFavouriteDrink)

let breakfast = "cereal";
let lunch = "pasta";
let dinner = "pasta";
//console.log(`For breakfast I had ${breakfast}, for lunch I had ${lunch} and for dinner, I am having ${dinner}.`);

breakfast = "toast";
lunch = "pasta";
dinner = "pasta";
//console.log(`For breakfast I had ${breakfast}, for lunch I had ${lunch} and for dinner, I am having ${dinner}.`);

let shoppingList = ["pasta", "cereal", "protein", "columbian cheese", "milk"];
// [] () {}

// console.table(shoppingList[0])
// console.table(shoppingList[1])
shoppingList.shift() // removes the first element
shoppingList.unshift("goats milk", "headphones") // inserts an element or elements to the start of an array
console.table(shoppingList)

// TODO: please use the three methods below on your lists
//* push - adds an element at the end
//* pop - removes an element off of the end
//* splice - takes out a selection of values from a specifc index

// TODO: a little bit extra... 
//* slice
//* shift
//* unshift

let favouriteFilms = ["Shrek", "Toy Story", "Star Wars"];
favouriteFilms.push("Lord of the Rings", "Harry Potter", "Matrix")
favouriteFilms.pop()
favouriteFilms.splice(0,4)
let newFilms = favouriteFilms.slice()
console.table(newFilms)
favouriteFilms.shift() // take from the front
favouriteFilms.unshift("Cheese") // add to the front of the array
console.table(favouriteFilms)



// console.table(favouriteFilms)
// // favouriteFilms.pop()
// console.table(favouriteFilms)
// // favouriteFilms.splice(4,1)
// let removed = favouriteFilms.splice(4,1)
// console.table(favouriteFilms)
// // favouriteFilms.push(removed)
// console.table(favouriteFilms)
// // console.log(removed)

// let favouriteSongs = ["Wrecking ball", "The Climb", "We can't stop"];
// console.log(favouriteSongs.length)
// console.table(favouriteSongs[0])
// console.table(favouriteSongs[1])
// console.table(favouriteSongs[2])

// TODO: A list that has your three favourite songs
// TODO: A list that has your three favourite films

//  Create a program that stores what you've eaten today for breakfast, lunch and what you will eat for dinner, log these to the console.

// Update the variables afterwards for what you plan on eating tomorrow. Log these new values to the console.