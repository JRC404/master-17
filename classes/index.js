class Bunny { // name of our class
    constructor(name, gender) { //? any value that isn't already defined
        this.name = name; //? waiting for a name from the user
        this.gender = gender
        this.age = 0; //? age has been defined as 0
        this.hops = 0; //? hops has been defined as 0
        this.ears = true; //? ears has been defined as true
    }
    increaseAge() {
        this.age++; // increasing the age
    }
    increaseHops() {
        this.hops++ // increasing the hops
    }
}
// declaration of freddie... new instance / new version of the Bunny class
// new keyword before new instances / versions
// new keyword calls the constructor
const sarah = new Bunny("Sarah", "Female")
const freddie = new Bunny("Freddie", "Male")
const brian = new Bunny("Brian", "Male")
const floppy = new Bunny("Floppy", "Male")
const shelly = new Bunny("Shelly", "Female")
// console.log(floppy.age)
// floppy.increaseAge()
// console.log(floppy.age)

//* object - date and functions (methods when they are inside of objects && classes)

// class Person {
//     constructor(name, dateOfBirth, eyeColor, nose, ears) { // anything that hasn't been defined yet
//         this.name = name;
//         this.dateOfBirth = dateOfBirth;
//         this.eyeColor = eyeColor;
//         this.nose = nose;
//         this.ears = ears;
//         this.macbookWorking = true;
//         this.punchJacob = true;
//         this.hungerLevel = 100;
//         this.thirstLevel = 100;
//     }
//     increaseEars() {
//         this.ears++
//     }
//     stopPunchingJacob() {
//         this.punchJacob = false;
//     }
//     eat() {
//         this.hungerLevel -= 20;
//     }
//     drink() {
//         this.thirstLevel -= 20;
//     }
//     train() {
//         this.hungerLevel += 20;
//         this.thirstLevel += 20;
//     }
// }


const david = new Person("David", "01.01.2003", "lime green", true, 2);
const diwa = new Person("Diwa", "01.01.2003", "tomato", true, 2);
const andrew = new Person("Andrew", "01.01.2002", "lemon", true, 2);

david.eat()

// diwa.increaseEars();
// andrew.increaseEars();
// david.increaseEars();
// david.increaseEars();
// console.log(david, diwa, andrew);


// diwa.stopPunchingJacob();
// andrew.stopPunchingJacob();
// david.stopPunchingJacob();
// console.log(david, diwa, andrew);