// Choice display container
const choiceDisplayContainer = document.getElementById(
  "choiceDisplayContainer"
);
// Player choice display
const playerDisplay = document.getElementById("playerDisplay");
// Computer choice display
const computerDisplay = document.getElementById("computerDisplay");
// Result display
const resultDisplay = document.getElementById("resultDisplay");

// Score display container
const scoreDisplayContainer = document.getElementById("scoreDisplayContainer");
// Player score display
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// Computer score display
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

// Restart Button
const restartBtn = document.getElementById("restartBtn");

// Possible choices
const choices = ["ROCK", "PAPER", "SCISSORS"];

// Game variables
let result = "";
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  // Remove hidden CSS class to show game details
  choiceDisplayContainer.classList.remove("hidden");
  scoreDisplayContainer.classList.remove("hidden");
  restartBtn.classList.remove("hidden");

  // Randomly generate a choice for the computer
  let computerChoice = choices[Math.floor(Math.random() * 3)];

  // Game logic
  if (playerChoice === computerChoice) {
    result = "TIE!";
  } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
    result = "YOU WIN!";
  } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
    result = "YOU WIN!";
  } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
    result = "YOU WIN!";
  } else {
    result = "YOU LOSE!";
  }

  // Remove "greenText" and "redText" CSS classes
  resultDisplay.classList.remove("greenText", "redText");

  // If the player wins
  if (result === "YOU WIN!") {
    // Update scores
    playerScore++;
    // Add "greenText" CSS class
    resultDisplay.classList.add("greenText");
    // If the player loses
  } else if (result === "YOU LOSE!") {
    // Update and display scores
    computerScore++;
    // Add "redText" CSS class
    resultDisplay.classList.add("redText");
  }

  // Update player and computer choice display
  playerDisplay.textContent = `PLAYER CHOSE: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER CHOSE: ${computerChoice}`;
  // Update result display
  resultDisplay.textContent = result;

  // Update player and computer score display
  playerScoreDisplay.textContent = `PLAYER SCORE: ${playerScore}`;
  computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerScore}`;
}

function restart() {
  // Reset scores
  playerScore = 0;
  computerScore = 0;

  // Add hidden CSS class to show game details
  choiceDisplayContainer.classList.add("hidden");
  scoreDisplayContainer.classList.add("hidden");
  restartBtn.classList.add("hidden");
}
