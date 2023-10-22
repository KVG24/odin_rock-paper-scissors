const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const possibleChoices = document.querySelectorAll('img');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const result = document.querySelector('.result');
const restart = document.querySelector('.restart');
document.querySelector('.restart').style.display = 'none';
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

function main() {
    rockBtn.addEventListener('click', () => game('rock'))
    paperBtn.addEventListener('click', () => game('paper'))
    scissorsBtn.addEventListener('click', () => game('scissors'))
}

main();

function win(human, computer) {
    userScore++;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    userChoiceDisplay.textContent = human;
    computerChoiceDisplay.textContent = computer;
    document.getElementById(human).classList.add('won');
    setTimeout(() => document.getElementById(human).classList.remove('won'), 400)
}

function lost(human, computer) {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    userScoreDisplay.textContent = userScore;
    userChoiceDisplay.textContent = human;
    computerChoiceDisplay.textContent = computer;
    document.getElementById(human).classList.add('lost');
    setTimeout(() => document.getElementById(human).classList.remove('lost'), 400)
}

function draw(human, computer) {
    userChoiceDisplay.textContent = human;
    computerChoiceDisplay.textContent = computer;
    document.getElementById(human).classList.add('draw');
    setTimeout(() => document.getElementById(human).classList.remove('draw'), 400)
}

function getComputerChoice() {
    let arr = ['rock', 'paper', 'scissors']
    let computerChoice = arr[Math.floor(Math.random() * arr.length)]
    computerChoiceDisplay.textContent = computerChoice
    return computerChoice;
}

function game(human) {
    let computer = getComputerChoice();
    if (human === 'paper' && computer === 'rock') {
        win(human, computer)
    } else if (human === 'paper' && computer === 'scissors') {
        lost(human, computer)
    } else if (human === 'scissors' && computer === 'rock') {
        lost(human, computer)
    } else if (human === 'scissors' && computer === 'paper') {
        win(human, computer)
    } else if (human === 'rock' && computer === 'paper') {
        lost(human, computer)
    } else if (human === 'rock' && computer === 'scissors') {
        win(human, computer)
    } else if (human === computer) {
        draw(human, computer)
    } else { return console.log(`Something went wrong`);}
    getWinner();
};

function getWinner() {
    if (userScore === 5 || computerScore === 5) {
        if (userScore === 5) {
            result.textContent = 'YOU WON!'
            document.querySelector('.restart').style.display = 'block';
        } else {
            result.textContent = 'YOU LOST!'
            document.querySelector('.restart').style.display = 'block';
        }
        document.querySelector('.btn-container').remove();
        document.querySelector('h2').remove();
    }
}