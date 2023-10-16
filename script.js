function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * arr.length)];
};

function getPlayerChoice() {
    let choice = prompt('Choose rock, paper or scissors').toLowerCase();
    if (choice === '' || choice === null) {
        return alert(`You didn't choose anything`)
    } else if (choice !== 'rock' && 
                choice !== 'paper' && 
                choice !== 'scissors') {
        return alert('Probably a typo')
    } else {
        return choice
    }
};

function playRound(human, cpu) {    
    if (human === 'paper' && cpu === 'rock') {
        return 'won'
    } else if (human === 'paper' && cpu === 'scissors') {
        return 'lost'
    } else if (human === 'scissors' && cpu === 'rock') {
        return 'lost'
    } else if (human === 'scissors' && cpu === 'paper') {
        return 'won'
    } else if (human === 'rock' && cpu === 'paper') {
        return 'lost'
    } else if (human === 'rock' && cpu === 'scissors') {
        return 'won'
    } else if (human === cpu) {
        return `tie`
    } else { return `Something went wrong`}
};

function game() {
    let userScore = 0;
    let cpuScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice().toLowerCase();       
        let result = playRound(playerChoice, computerChoice);
        
            if (result === 'won') {
                userScore++
            } else if (result === 'lost') {
                cpuScore++
            } else {
                i--
            }
        alert('User  -  ' + playerChoice + '   ' + userScore + '   :   ' 
            + cpuScore + '   ' + computerChoice + '  -  CPU')
    }
    
    if (userScore > cpuScore) {
        return alert('You won!')
    } else if (userScore < cpuScore) {
        return alert('You lost!')
    }
};

game();