class Animal {
    constructor(name, hunger) {
        this.name = name;
        this.hunger = hunger;
    }
    sayMyName() {
        console.log(`Hello, ${this.name}`)
    }
    eat() {
        this.hunger -= 10
    }
}

class Cow extends Animal {
    constructor(name, hunger, moo, predictTheWeather) {
        super(name, hunger);
        this.moo = moo;
        this.predictTheWeather = predictTheWeather;
    }
    makeAMoo() {
        console.log("Moo.")
    }
}

const dan = new Cow("Dan", 100, true, true)
dan.makeAMoo()

class Cat extends Animal {
    constructor(name, hunger, meow) {
        super(name, hunger);
        this.meow = meow;
    }
    makeAMeow() {
        console.log("Meow")
    }
}

const susan = new Animal("Susan", 100);
const barry = new Cow("Barry", 100, true, true);
const jane = new Cat("Jane", 100, true);