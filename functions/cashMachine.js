let userBalance = 1000;
let amount = 100;
// console.log(userBalance -= amount);
// console.log(`You have £${userBalance} left.`)

// amount = 20;
// console.log(userBalance -= amount);
// console.log(`You have £${userBalance} left.`)

// amount = 50;
// console.log(userBalance -= amount);
// console.log(`You have £${userBalance} left.`)


const cashWithdrawl = (accountNumber, amount) => {
    userBalance -= amount
    console.log(`You have withdrawn £${amount} from ${accountNumber}`);
    console.log(`You have £${userBalance} left.`)
}

// // console.log(test)
// cashWithdrawl(1234567, 100)
// cashWithdrawl(1234567, 500)
// cashWithdrawl(1234567, 100)

// function drinkOrder(name, size, drinkType) {
//     console.log(`Order taken: ${size} ${drinkType} for ${name}`)
// }

// drinkOrder("David", "regular", "mocha")
// drinkOrder("Jenny", "small", "tea")
// drinkOrder("Andrew", "small", "water")

// let name = "David"
// let size = "regular"
// let drinkType = "mocha"
// console.log(`Order taken: ${size} ${drinkType} for ${name}`)

// name = "Jenny"
// size = "small"
// drinkType = "cappuccino"
// console.log(`Order taken: ${size} ${drinkType} for ${name}`)

// name = "Andrew"
// size = "small"
// drinkType = "water"
// console.log(`Order taken: ${size} ${drinkType} for ${name}`)

//TODO: to minus the amount withdrawn from the user balance

// let userBalance = 1000;
const cashWithdrawl = (accountNumber, amount) => {
    console.log(`You have withdrawn £${amount} from ${accountNumber}`);
    userBalance -= amount;
    console.log(`You have £${userBalance} left.`)
}
cashWithdrawl(1234567, 100)
cashWithdrawl(1234567, 100)