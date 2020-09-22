// the variable scope
// why we use let over var
// Q & A

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

const myFirstFunction = () => {
    let firstName = "Ian"
    console.log(firstName);
    // console.log(secondName);
}

const mySecondFunction = () => {
    let secondName = "Davenport";
    console.log(secondName);
}

const callThemBoth = () => {
    myFirstFunction()
    mySecondFunction()
}

callThemBoth()