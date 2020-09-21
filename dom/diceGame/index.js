// TODO: Generate a dice roll... a RANDOM number from 1-6
// TODO: Rule 1: if you score a 1, you lose... what happens IF that occurs?
// TODO: Rule 2: Score of 21 or more will win the game for you... what will happen IF I score 21 or more?

//?  I wouldn't worry about the DOM just yet... 
//? LOGIC is important. 
let roll = 2;
let score = 20;
if (roll == 1) {
    console.log("You lose, Manchester Dan.");
}
else if (score >= 21) {
    console.log("Somehow, Man-like Dan, you win.");
}
else {
    console.log("Continue playing.")
}
