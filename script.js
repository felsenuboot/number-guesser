let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);
const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    if (userGuess >= 0 && userGuess < 10) {
        if (getAbsoulteDistance(userGuess, secretTarget) < getAbsoulteDistance(computerGuess, secretTarget)){
            return true;
        } else if (getAbsoulteDistance(userGuess, secretTarget) > getAbsoulteDistance(computerGuess, secretTarget)) {
            return false;
        } else {
            return true;
        };
    } else {
        alert("Your number must be a number between 0 and 9!")
    };

}; 
const updateScore = (winner) => {
    switch (winner){
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
        default:
            break;
    };
};

const advanceRound = () => currentRoundNumber++;
const getAbsoulteDistance = (value1, value2) => Math.abs(value1 - value2);