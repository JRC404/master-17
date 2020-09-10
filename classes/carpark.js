// TODO: Let’s create a class called Cars for a car parking company.

// TODO: This will allow you to store information of: car registration number, number of hours parked and total amount charged. (Say £6.50 per hour?)

// TODO The first car entered the car park, parked for 5 hours and ready to pay. Display this information so the driver can pay for his/her parking fee.

// TODO: EXTENSION:

// TODO: Let’s continue with our car park project.

// TODO: Add a subclass for staff, so that staff can provide their staff number, and credits they have left to pay for the car park fees.

// TODO: Given a staff member parked for 5 hours as before, show how much it will be charged and remaining balance.

// TODO: EXTENSION: 

// TODO: Weekends and overnight could be charged differently. If you park on a weekend, you receive a different charge. 

// TODO: All day parking: if you stay for 8 hours or more, you get a fixed rate 



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