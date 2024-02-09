const choicesArray = ['rock', 'paper', 'scissor'];
let myScore = 0;
let enemyScore = 0;

function getComputerChoice() {
    return choicesArray[Math.floor(Math.random() * choicesArray.length)];

}

function gameFirstRound(computerChoice, playerSelection) {
    if (
        (computerChoice === 'rock' && playerSelection === 'paper') ||
        (computerChoice === 'scissor' && playerSelection === 'rock') || 
        (computerChoice === 'paper' && playerSelection === 'scissor')) {
        ++myScore;
        return 'Player Won';
    } else if (computerChoice === playerSelection) {
        return 'It\'s a tie';
    } else {
        ++enemyScore;
        return 'Computer Won';

    }
}

for (let i = 1; i <= 5; ++i) {
    let computerChoice = getComputerChoice()
    let playerSelection = prompt('Pick Rock, Paper or Scissors').toLowerCase()

    console.log(`Round number: ${i}`)
    console.log(`your choice: ${playerSelection}`)
    console.log(`Computer's choice: ${computerChoice}`)
    console.log(gameFirstRound(computerChoice, playerSelection))
    console.log("*".repeat(50))

}
console.table({'Tie\'s': 5 - enemyScore - myScore ,'Player': myScore, 'Enemy': enemyScore}, ['names','scores'])
console.log( (myScore > enemyScore) ? 'You Won': myScore == enemyScore? 'It\'s a tie': 'You lost')