class Mathematics {
    constructor(numberOne, numberTwo) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    }
    addition() {
        return this.numberOne + this.numberTwo;
    }
    subtraction() {
        return this.numberOne - this.numberTwo;
    }
    multiplication() {
        return this.numberOne * this.numberTwo;
    }
    division() {
        return this.numberOne / this.numberTwo;
    }
}

const maths = new Mathematics(15, 10)
const multiplyMe = maths.multiplication()
console.log(multiplyMe)