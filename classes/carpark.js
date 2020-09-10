class Car {
    constructor(regPlate, hoursParked) {
        this.regPlate = regPlate;
        this.hoursParked = hoursParked;
        this.hourlyRate = 1.50;
        this.total = 0;
    } 
    totalCharge() {
        this.total = this.hoursParked * this.hourlyRate;
        // console.log(`Your total is £${this.total}. Pay up or lose your legs.`)
    }
}

const firstCar = new Car("F1", 5)
console.log(firstCar);
firstCar.totalCharge()
console.log(firstCar);