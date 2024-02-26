const choicesArray = ['rock', 'paper', 'scissor'];
let myScore = 0;
let enemyScore = 0;
let round = 1

function getComputerChoice() {
    return choicesArray[Math.floor(Math.random() * choicesArray.length)];

}

function playRound(computerChoice, playerChoice) {
    if (
        (computerChoice === 'rock' && playerChoice === 'paper') ||
        (computerChoice === 'scissor' && playerChoice === 'rock') || 
        (computerChoice === 'paper' && playerChoice === 'scissor')) {
        ++myScore;
        return 'You Won';
    } else if (computerChoice === playerChoice) {
        return 'It\'s a tie';
    } else {
        ++enemyScore;
        return 'Computer Won';

    }
}

const button = document.querySelector('button');
const para = document.createElement('p')
const span = document.querySelector('span')
para.setAttribute('class', 'currentResults')
button.parentNode.parentNode.appendChild(para)

button.addEventListener('click', () => {
    let playerChoice = button.getAttribute('class');
    let computerChoice = getComputerChoice();
    console.log(computerChoice);

    para.textContent = playRound(computerChoice, playerChoice);
    span.textContent = ++round;

    document.querySelector('#PlayerScore').textContent = myScore
    document.querySelector('#ComputerScore').textContent = enemyScore

    if (myScore === 5 || enemyScore == 5) {
        let winner = myScore === 5? 'You!!!': 'The Computer'
        para.textContent = 'And the Final Winner is: ' + winner

    }
});

// for (let i = 1; i <= 5; ++i) {
//     let computerChoice = getComputerChoice()
//     let playerSelection = prompt('Pick Rock, Paper or Scissors').toLowerCase()

//     console.log(`Round number: ${i}`)
//     console.log(`your choice: ${playerSelection}`)
//     console.log(`Computer's choice: ${computerChoice}`)
//     console.log(gameFirstRound(computerChoice, playerSelection))
//     console.log("*".repeat(50))

// }
// console.table({'Tie\'s': 5 - enemyScore - myScore ,'Player': myScore, 'Enemy': enemyScore}, ['names','scores'])
// console.log( (myScore > enemyScore) ? 'You Won': myScore == enemyScore? 'It\'s a tie': 'You lost')