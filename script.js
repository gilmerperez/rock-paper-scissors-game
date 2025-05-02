// Possible choices
const choices = ["ROCK", "PAPER", "SCISSORS"];

// Alert user of their choice
const playerDisplay = document.getElementById("playerDisplay");
// Alert user of computer choice
const computerDisplay = document.getElementById("computerDisplay");
// Display game result
const resultDisplay = document.getElementById("resultDisplay");

const scoreDisplayContainer = document.getElementById("scoreDisplayContainer");

// Display score for user and computer
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let result = "";
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
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

  // Update display to let user know their choice
  playerDisplay.textContent = `PLAYER CHOSE: ${playerChoice}`;
  // Update display to let user know the computer's choice
  computerDisplay.textContent = `COMPUTER CHOSE: ${computerChoice}`;
  // Update display to let user know the result of the game
  resultDisplay.textContent = result;

  // Remove CSS classes that add color to the result text
  resultDisplay.classList.remove("greenText", "redText");

  // If the user wins
  if (result === "YOU WIN!") {
    // Add CSS class that makes the text green
    resultDisplay.classList.add("greenText");
    // Update user score
    playerScore++;
    // Display user's updated score
    playerScoreDisplay.textContent = playerScore;
    // If the user loses,
  } else if (result === "YOU LOSE!") {
    // Add CSS class that makes the text red
    resultDisplay.classList.add("redText");
    // Update and display computer's score
    computerScore++;
    // Display computer's updated score
    computerScoreDisplay.textContent = computerScore;
  }
}

// Function to reset all variables back to 0
function restart() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  resultDisplay.textContent = "";

  playerDisplay.textContent = "";
  computerDisplay.textContent = "";
}
