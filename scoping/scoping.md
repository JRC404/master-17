# Scoping, the joys

1. What is the output for **sayHello()** && **sayGoodbye()** in the code below?

```javascript
let name = "Dave"; // global variable / global scoped variable

const sayHello = () => {
    let name = "Johnny"; 
    console.log(`Hello, ${name}`);
}

const sayGoodBye = (name) => {
    console.log(`Goodbye, ${name}`)
}

sayHello();
sayGoodBye(name);
```