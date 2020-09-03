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
// console.log(age, weather)
// if (age < 55 && weather == "sunny") {
//     // console.log(age, weather)
//     console.log("You are allowed in.")
// }
// else if (age < 55 || weather == "sunny") {
//     // console.log(age, weather)
//     console.log("You are also allowed in.")
// }
// else {
//     // console.log(age, weather)
//     console.log("You are not allowed in.")
// }



// with a switch case, we need a couple of things
//* key = variable that you are checking the value of.
//* case = conditions that you want to compare...
//* default = else statement
dayOfTheWeek = "Sunday";
// switch (dayOfTheWeek) {
//     case "Monday":
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//     case "Friday":
//         console.log(`It is ${dayOfTheWeek}, so I have set your alarm.`)
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log(`It is ${dayOfTheWeek}, so I have not set your alarm.`)
//         break;
//     default:
//         console.log("I don't know what you mean.")
//         break;
// }
// shift alt down

// TODO: create an age calculator - 
//? age variable...
//* below 18, no service
//* below 40, full price
//* below 60, 25% off the price
//* below 80, 50% off the price
//* below 100, 100% off the price
//* anything else... don't serve... 

let color = "orange"

switch (color) {
    case "purple":
        console.log(`I am ${color}. Meh, that's okay`);
        break; // this ends the switch case.
    case "green":
        console.log(`I am ${color}. Bad choice.`);
        break;
    case "orange":
        console.log(`I am ${color}. Good choice.`);
        break;
    default:
        console.log("Pick a color.")
        break;
}

// if (color == "purple") {
//     console.log(`I am ${color}. Meh choice.`);
//     // do something
// } else if (color == "blue") {
//     console.log(`I am ${color}. Poor choice.`);
//     // do something
// } else if (color == "yellow") {
//     console.log(`I am ${color}. Bad choice.`);
//     // do something
// } else if (color == "green") {
//     console.log(`I am ${color}. Rubbish choice.`);
//     // do something
// } else if (color == "pink") {
//     console.log(`I am ${color}. Argh choice.`);
//     // do something
// } else if (color == "orange") {
//     console.log(`I am ${color}. Good choice.`);
//     // do something
// }
// else {
//     console.log("Meh.")
// }


// TODO: Switch case this bad boy. :)
let car = "Peugeot";
if (car == "Ford" || car == "GM") {
    console.log("You've got an American car!");
} else if (car == "Peugeot" || car == "Citroen") {
    console.log("You've got a French boy!");
} else if (car == "Honda" || car == "Toyota" || car == "Suzuki") {
    console.log("Japanese cars are dead quiet!");
} else if (car == "Mercedes") {
    console.log("You are proper posh German!");
} else if (car == "Volkswagen") {
    console.log("German aren't that bad at all!");
} else if (car == "Hyundai" || car == "Kia") {
    console.log("South Korean cars are getting popular!");
} else {
    console.log("Your car is not in the top ten companies in the world!");
}



function dayOfTheWeekCheck(dayOfTheWeek) {
    if (dayOfTheWeek == "Monday") {
        // do something
        console.log("Alarm")
    } else if (dayOfTheWeek == "Tuesday") {
        // do something
        console.log("Alarm")
    } else if (dayOfTheWeek == "Wednesday") {
        // do something
        console.log("Alarm")
    } else if (dayOfTheWeek == "Thursday") {
        // do something
        console.log("Alarm")
    } else if (dayOfTheWeek == "Friday") {
        // do something
        console.log("Alarm")
    } else if (dayOfTheWeek == "Saturday") {
        // do something
        console.log("No alarm")
    } else if (dayOfTheWeek == "Sunday") {
        console.log("No alarm")
        // do something
    } else {
        console.log("I don't know what you mean.")
    }
}

dayOfTheWeekCheck("Sunday")
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