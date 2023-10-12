function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * arr.length)];
};

function playerInteraction() {
    let choice = prompt('Choose rock, paper or scissors').toLowerCase();
    if (choice === '' || choice === null) {
        return alert(`You didn't choose anything`)
    } else if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        return alert('Probably a typo')
    } else {
        return choice
    }
};

function playRound(a, b) {    
    if (a === 'paper' && b === 'rock') {
        return 'won'
    } else if (a === 'paper' && b === 'scissors') {
        return 'lost'
    } else if (a === 'scissors' && b === 'rock') {
        return 'lost'
    } else if (a === 'scissors' && b === 'paper') {
        return 'won'
    } else if (a === 'rock' && b === 'paper') {
        return 'lost'
    } else if (a === 'rock' && b === 'scissors') {
        return 'won'
    } else if (a === b) {
        return `tie`
    } else { return `Something went wrong`}
};


function game() {
    let userScore = 0;
    let cpuScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerChoice = playerInteraction();
        let computerChoice = getComputerChoice().toLowerCase();
        
        console.log(playerChoice);
        console.log(computerChoice);        
        
        let result = playRound(playerChoice, computerChoice)
        
        if (result === 'won') {
            userScore++
        } else if (result === 'lost') {
            cpuScore++
        } else {
            return
        }
        alert(`User  ${userScore} : ${cpuScore}  CPU`)
    }
    if (userScore > cpuScore) {
        return alert('You won!')
    } else if (userScore < cpuScore) {
        return alert('You lost!')
    }
};

game();