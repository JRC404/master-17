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

// const sayHello = (name) => {
//     // ES6 syntax
//     console.log(`Hello there, ${name}.`);
// }

// function sayHi(name) {
//     // old syntax
//     console.log(`Hello there, ${name}`);
// }

// const addition = (numberOne, numberTwo) => {
//     let sum = numberOne + numberTwo;
//     console.log(`I am the console log inside the function: ${sum}`)
//     return sum;
//     // console.log(numberOne + numberTwo)
// }

// const emailLogger = (email) => {
//     return email;
// }


// let pedroEmail = emailLogger("jacobIsTheBest@gmail.com");
// let raymondEmail = emailLogger("jacobIsTheBestItIsTrue@gmail.com");
// console.log(pedroEmail, raymondEmail)

// const userDetails = {
//     name: "Pedro",
//     email: pedroEmail
// }

// console.log(userDetails.email)

// let finbarNumber = addition(5, 8) // adding up the two numbers and storing the value...
// let multiplication = finbarNumber * 10
// console.log(multiplication)
// console.log(`Finbar's total of the two numbers is: ${finbarNumber}`)


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

const multiplyByNineFifths = (celcius) => {
    // console.log(celcius * (9/5))
    return celcius * (9/5);
    // 8 * (9/5)
}

const getFahrenheit = (celcius) => {
    // multiplyByNineFifths = (14.4) + 32
    return multiplyByNineFifths(celcius) + 32;
}

// console.log(`The temp outside is ${multiplyByNineFifths(80)} F`)
console.log(`The temp outside is ${getFahrenheit(8)} F`)

function subtraction(numberOne, numberTwo) {
    return numberOne - numberTwo
}

let value = subtraction(10,5)
console.log(`The total is ${value}.`)

//? function should only perform one task

const withdrawl = (userBalance, amount) => {
    return userBalance - amount
}

const deposit = (userBalance, amount) => {
    return userBalance + amount
}

const bankStatement = () => {
    let withdrawlAmount = withdrawl(1000, 500)
    // let depositAmount = deposit(1000, 500);
    console.log(`Your new total is: £${deposit(withdrawlAmount, 20)}`)
}

bankStatement()