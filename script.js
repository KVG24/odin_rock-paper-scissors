function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * arr.length)];
}

const computerSelection = getComputerChoice();
const playerSelection = 'rOck';

function playRound(a, b) {
    let human = a.toLowerCase();
    let cpu = b.toLowerCase();

    if (human === cpu) {
        return `It's a tie!`
    } else if (human === 'paper' && cpu === 'rock') {
        return 'You won!'
    } else if (human === 'paper' && cpu === 'scissors') {
        return 'You lost!'
    } else if (human === 'scissors' && cpu === 'rock') {
        return 'You lost!'
    } else if (human === 'scissors' && cpu === 'paper') {
        return 'You won!'
    } else if (human === 'rock' && cpu === 'paper') {
        return 'You lost!'
    } else if (human === 'rock' && cpu === 'scissors') {
        return 'You won!'
    } else { return `Something went wrong`}
}

console.log(playRound(playerSelection, computerSelection));