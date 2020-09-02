// let lightOn = true;

const lightSwitch = (lightOn) => {
    if (lightOn == true) {
        console.log("It's not the Blackpool light show, turn it off.")
        lightOn = false; // turn the light off.
    } else {
        console.log("It's a bit dark in here. Turn that light on.")
        lightOn = true;
    }
}

// lightSwitch(false)
// lightSwitch(false)
// lightSwitch(false)

const sayHello = (name) => {
    // ES6 syntax
    console.log(`Hello there, ${name}.`);
}

function sayHi(name) {
    // old syntax
    console.log(`Hello there, ${name}`);
}


// sayHello("Jacob") // parameter == value
// sayHi("Ian") // parameter == value

// let theGoodCoffee = "North Star"
// let coffeeIsGrinding = false;

// const grindThoseBeans = (coffeeIsGrinding) => { // parameter ()
//     // TODO: true or false... as a parameter
//     if(coffeeIsGrinding == true) {
//         console.log("coffee is now going to stop.")
//         coffeeIsGrinding = false;
//     } else if (coffeeIsGrinding == false) {
//         console.log("coffee is about to grind.")
//         coffeeIsGrinding = true
//     }
//     else {
//         console.log("I am not sure what you mean...")
//     }
//     //? if coffee is grinding... stop and tell me.
//     //? if coffee isn't griding... start and tell me...
// }

// grindThoseBeans(true) // calling a function
// grindThoseBeans(false)
// grindThoseBeans("cheese") // calling a function











