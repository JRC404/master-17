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

const sayGoodBye = () => {
    let name = "Dave";
    console.log(`Goodbye, ${name}`)
}

console.log(name) // error, Jonny || Dave, Ummm
// ReferenceError: name is not defined
// Scope chain does not allow name to be searched for inside of functions.
sayHello();
sayGoodBye();
