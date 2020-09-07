const person =  {
    name: 'David',
    age: '26',
    eyeColour: 'Brown',
    gender: 'Male',
    faveColour: 'Orange',
    sayHi () {
        console.log(`Hello my name is ${this.name}`);
    }
}

person.sayHi()