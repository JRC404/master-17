let userPin = 1234; // hardcoded the userPin
let attemptCounter = 0
let withdrawLimit = 250

const pinValidation = (input) => {
    if (input == userPin) {
        //* if 3456 == 1234, then run the withdraw cash function
        withdrawCash()
    } else {
        // if it doesn't match, cancel the transcation
        cancelTranscation()
        // try again function
    }
}

const withdrawCash = (userBalance, amount) => {
    console.log("You can now withdraw cash.")
}

const cancelTranscation = () => {
    console.log("Hope to see you soon.")
}

// pinValidation(3456) // 3456 doesn't match 1234 
pinValidation(1234) // 1234 does match 1234, so run the withdraw function