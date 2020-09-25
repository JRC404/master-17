class Rabbit {
    constructor(name, health, hunger) {
        this.name = name;
        this.health = health;
        this.hunger = hunger;
        this.strength = 25;
    }
    increaseHealth() {
        this.health++;
    }
    decreaseHunger() {
        this.hunger--;
    }
    train() {
        this.strength += 5;
    }
}

const freddy = new Rabbit("Freddy", 100, 100);

module.exports = {
    Rabbit, 
    freddy
}