const pet = {
    name: 'dean',
    typeOfPet: 'dog',
    age: 20,
    color: 'red',
    drink() {
        console.log(`Your ${this.typeOfPet} ${this.name} is drinking.`);
    },
    eat() {
        console.log(`Your ${this.typeOfPet} ${this.name} is eating.`);
    }
}

pet.drink();
