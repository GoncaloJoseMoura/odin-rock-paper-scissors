# odin-rock-paper-scissors

This project objective is to create an interactive rock paper scissors game in the console

1. Understand the Problem:
Building a game where both the player and the computer can choose one out of three option each (Rock, Paper, Scissor)
Knowing that 
- Rock beats Scissors
- Paper beats Rock
- Scissors beats Paper
if both players have the same choice, it will be a tie.

2. Plan
“Given input X, what are the steps necessary to return output Y?”
- Player inputs his choice (Rock, Paper, Scissor)
- Computer generates a random choice
- A conditional Statement checks for the combination of picked choices
- A message is displayed letting the player know if he won or lost

3. Pseudocode
Prompt playerSelection
Create random computerChoice
if playerSelection beats computerChoice
    Print player won
else
    Print player lost