let favouriteSong = "Wrecking Ball";
let favouriteArtist = "Miley Cyrus";
let weather = "rain";
// TODO: create a variable and then create an if statement with an if, else if and then an else.
let dayOfTheWeek = "Monday";
let age = 53;

//* < > <= >= 
//* && AND
//* || OR

// if (age <= 54) {
//     console.log("You are allowed in without a discount.")
// } else if (age > 54) {
//     // do something here
// } else {
//     console.log("You are valid for a discount.")
// }
// DRY - don't repeat yourself
// let info = "Hello, I am Jacob Reilly-Cooper. I'm 55 and ginger."
// console.log(info)
// console.log(info)
// console.log(info)
// let name = "Jacob"
// let phone = "iPhone"
// let info = `${name} ${phone}`
// let info = name + phone
// console.log(info)
console.log(age, weather)
if (age < 55 && weather == "sunny") {
    // console.log(age, weather)
    console.log("You are allowed in.")
}
else if (age < 55 || weather == "sunny") {
    // console.log(age, weather)
    console.log("You are also allowed in.")
}
else {
    // console.log(age, weather)
    console.log("You are not allowed in.")
}




// if (dayOfTheWeek == "Monday") {
//     // do something
//     console.log("Alarm")
// }
// else if (dayOfTheWeek == "Tuesday") {
//     // do something
//     console.log("Alarm")
// }
// else if (dayOfTheWeek == "Wednesday") {
//     // do something
//     console.log("Alarm")
// }
// else if (dayOfTheWeek == "Thursday") {
//     // do something
//     console.log("Alarm")
// }
// else if (dayOfTheWeek == "Friday") {
//     // do something
//     console.log("Alarm")
// }
// else if (dayOfTheWeek == "Saturday") {
//     // do something
//     console.log("No alarm")
// }
// else if (dayOfTheWeek == "Sunday") {
//     console.log("No alarm")
//     // do something
// }

// let name = "David"
// if (condition1) {
//     // do something
// }
// else if (condition2) {
//     // do something
// }
// else {
//     // captures everything else
// }

// if (dayOfTheWeek == "Monday") {
//     // do something
//     console.log("Woo, Monday!")
// }
// else if (dayOfTheWeek == "Tuesday") {
//     // do something
// }
// else {
//     console.log("Hi.")
// }

//* comparison operators:
//* == Equal - checks the value
//* === Strict Equal - checks the type && the value
//* != Not equal - checks the value
//* !== Strict Not Equal - checks the type && the value

// if (age !== "55") { 
//     //? is the value 55 && is the type a number?
//     console.log("Your value and type match what I need.")
// }
// else if (age != "55") {
//     console.log("Your value is all I need to check.")
// }
// else {
//     console.log("I don't know what you did.")
// }

// if (weather == "rain") {
//     console.log("Where is my umbrella?");
// } 
// else if (weather == "snowing") {
//     console.log("Put a jacket on, fool.")
// } 
// else if (weather == "cloudy") {
//     console.log("I don't know what to do.")
// } 
// else {
//     console.log("Sandals. Get your sandals.")
// }

// ifttt 
// if (favouriteSong == "Wrecking Ball") {
//     console.log("You're very smart.");
// } else {
//     console.log("You owe me £100.")
// }

// if (favouriteArtist == "Miley Cyrus") {
//     console.log("You win £100.");
// } else {
//     console.log("You owe me £100.");
// }