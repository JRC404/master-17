// the variable scope
// why we use let over var
// Q & A

// let name = "Dave"; // global variable / global scoped variable

const sayHello = () => {
    let name = "Johnny"; // function scoped variable
    // function scoped variables only exist inside of that function... unless returned, obvs.
    // does name exist inside this function?
    console.log(`Hello, ${name}`);
}

// const sayGoodBye = (name) => {
//     let name = "Dave";
//     console.log(`Goodbye, ${name}`)
// }
// sayGoodBye("Raymond");
// SyntaxError: Identifier 'name' has already been declared

// console.log(name) // error, Jonny || Dave, Ummm
// ReferenceError: name is not defined
// Scope chain does not allow name to be searched for inside of functions.

const sayGoodBye = (name) => {
    let name = "Dave";
    console.log(`Goodbye, ${name}`)
}

sayHello();
sayGoodBye("Raymond");
