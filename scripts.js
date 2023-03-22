function getComputerChoice() {
    let firstInt = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (firstInt === 1) {
        return "Paper"
    } else if (firstInt === 2) {
        return "Rock"
    } else {
        return "Scissors"
    }
}