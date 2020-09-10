class Person {
    constructor(name, height, weight, numberOfLegs, numberOfArms) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.numberOfLegs = numberOfLegs;
        this.numberOfArms = numberOfArms;
    }
}

// const ian = new Person("Ian", true, true, 2, 4)
// console.log(ian)

// adults can drive, vote, drink
// children can got to the little ridy things outside of shops, bounce, get up of the chair without groaning, not talk about ailments, sleep, cry without judgement

class Child extends Person {
    constructor(name, height, weight, numberOfLegs, numberOfArms, rideTheRidyThingOutsideOfShops, bounce, sleep) {
        super(name, height, weight, numberOfLegs, numberOfArms);
        this.rideTheRidyThingOutsideOfShops = rideTheRidyThingOutsideOfShops;
        this.bounce = bounce;
        this.sleep = sleep;
    }
}

const ian = new Child("Ian", true, true, 2, 4, true, true, true);
console.log(ian)

class Adult extends Person {
    constructor(name, height, weight, numberOfLegs, numberOfArms, drink, vote, drive) {
        super(name, height, weight, numberOfLegs, numberOfArms);
        this.drink = drink;
        this.vote = vote;
        this.drive = drive;
    }
}

const david = new Adult("David", true, true, 2, 2, true, true, true);
console.log(david)