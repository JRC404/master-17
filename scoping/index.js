// the variable scope
// why we use let over var
// Q & A

//* Introduction

// let name = "Dave"; // global variable / global scoped variable

// let name = "Izzy";
// const sayHello = () => {
//     let name = "Johnny"; 
//     console.log(`Hello, ${name}`);
// }

// const sayGoodBye = (name) => { // declaring name
//     // name = "Dave";
//     console.log(`Goodbye, ${name}`)
// }

// sayHello();
// sayGoodBye(name);

// const sayGoodBye = (name) => {
//     let name = "Dave";
//     console.log(`Goodbye, ${name}`)
// }
// sayGoodBye("Raymond");
// SyntaxError: Identifier 'name' has already been declared

// function scoped variable
// function scoped variables only exist inside of that function... unless returned, obvs.
// does name exist inside this function?

// console.log(name) // error, Jonny || Dave, Ummm
// ReferenceError: name is not defined
// Scope chain does not allow name to be searched for inside of functions.

//* calling functions as normal

// const myFirstFunction = () => {
//     let firstName = "Ian"
//     console.log(firstName);
//     // console.log(secondName);
// }

// const mySecondFunction = () => {
//     let secondName = "Davenport";
//     console.log(secondName);
// }

// const callThemBoth = () => {
//     myFirstFunction()
//     mySecondFunction()
// }

// callThemBoth()

//* no difference to start with with let && var

// let stringNew = "let string";
// var stringOld = "var string";

// const myFunction = () => {
//     let stringNew = "new let string";
//     var stringOld = "old var string";

//     console.log(`Inside function ${stringNew}`);
//     console.log(`Inside function ${stringOld}`);
// }

// myFunction();

// console.log(`Outside function ${stringNew}`);
// console.log(`Outside function ${stringOld}`);

// * Oh boy, something has changed...
// function myLet() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         // block scope starts and stops inside of the block with let
//     }
//     // console.log(i) // errors out
// }

// function myVar() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//         // block scope doesn't really apply to var, the rebel.
//     }
//     console.log(i) // 5
// }
// console.log("let");
// myLet();
// console.log("var");
// myVar();

function myLet() {
    for (let i = 0; i < 5; i++) {
        if(true) {
            let color = "purple";
            // console.log(i, color);
        }
        // block scope starts and stops inside of the block with let
    }
    // console.log(i, color) // i is not defined. Color isn't touched but is also undefined
}

function myVar() {
    for (var i = 0; i < 5; i++) {
        if(true) { // if lightOn == true
            var color = "orange";
            console.log(i, color);
        }
        // block scope doesn't really apply to var, the rebel.
    }
    console.log(i, color) // 5
}
// console.log("let");
// myLet();
console.log("var");
myVar();

