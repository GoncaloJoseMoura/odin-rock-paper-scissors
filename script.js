const choicesArray = ['Rock', 'Paper', 'Scissor']

let computerChoice = getComputerChoice()
let playerSelection = prompt('Pick Rock, Paper or Scissors')

function getComputerChoice() {
    return choicesArray[Math.floor(Math.random() * choicesArray.length)];

}

function gameFirstRound(computerChoice, playerSelection) {
    if (
        (computerChoice === 'Rock' && playerSelection === 'Paper') ||
        (computerChoice === 'Scissor' && playerSelection === 'Rock') || 
        (computerChoice === 'Paper' && playerSelection === 'Scissor')) {
        return 'Player Won';
    } else if (computerChoice === playerSelection) {
        return 'It\'s a tie';
    } else {
        return 'Computer Won';
    }
}

console.log(`your choice: ${playerSelection}`)
console.log(`Computer's choice: ${computerChoice}`)
console.log(gameFirstRound(computerChoice, playerSelection))