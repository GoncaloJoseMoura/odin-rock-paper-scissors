# odin-rock-paper-scissors

This project objective is to create an interactive rock paper scissors game in the console

1. Understand the Problem: <br/>
Building a game where both the player and the computer can choose one out of three option each (Rock, Paper, Scissor) <br>
Knowing that: <br/>
- Rock beats Scissors
- Paper beats Rock
- Scissors beats Paper <br/>
if both players have the same choice, it will be a tie.

2. Plan <br/>
“Given input X, what are the steps necessary to return output Y?” <br/>
- Player inputs his choice (Rock, Paper, Scissor)
- Computer generates a random choice
- A conditional Statement checks for the combination of picked choices
- A message is displayed letting the player know if he won or lost

3. Pseudocode  <br/>

<code>
Prompt playerSelection <br/>
Create random computerChoice <br/>
if playerSelection beats computerChoice <br/>
&emsp; Print player won <br/>
else <br/>
&emsp; Print player lost <br/>
</code>