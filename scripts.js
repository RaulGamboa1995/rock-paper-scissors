function getComputerChoice() {
    let firstInt = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (firstInt === 1) {
        return "paper"
    } else if (firstInt === 2) {
        return "rock"
    } else {
        return "scissors"
    }
}


function playRound() {
    getComputerChoice()
    let computerSelection = getComputerChoice()
    console.log("Computer has chosen " + computerSelection + "! now pick urs lmao")
    let askPlayer = prompt('your options are rock, paper or scissors.')
    let playerSelection = askPlayer.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'computer wins';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'player wins';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'player wins';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'tie';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'computer wins';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'computer wins';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'player wins';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'tie';
    }
}

