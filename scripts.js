let wins = 0
let ties = 0
let loses = 0

function keepScore() {
    console.log(wins + " wins, " + ties + " ties and " + loses + " loses.")
}

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
    let computerSelection = getComputerChoice()
    console.log("make your choice, human")
    let askPlayer = prompt('your options are rock, paper or scissors.')
    let playerSelection = askPlayer.toLowerCase();
    console.log("You picked " + playerSelection + " and computer picked " + computerSelection)
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        ties++;
        console.log('tie');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        loses++;
        console.log('computer wins');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        wins++;
        console.log('player wins');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        wins++;
        console.log('player wins');
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        ties++;
        console.log('tie');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        loses++;
        console.log('computer wins');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        loses++;
        console.log('computer wins');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        wins++;
        console.log('player wins');
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        ties++;
        console.log('tie');
    }
}

function game() {
    playRound()
    keepScore()
    playRound()
    keepScore()
    playRound()
    keepScore()
    playRound()
    keepScore()
    playRound()
    keepScore()
}