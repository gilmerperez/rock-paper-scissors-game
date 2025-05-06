// HTML DOM Elements
const choiceButtons = document.querySelectorAll("[data-choice]");
const choiceDisplayContainer = document.getElementById("choiceDisplayContainer");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const scoreDisplayContainer = document.getElementById("scoreDisplayContainer");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const restartBtn = document.getElementById("restartBtn");

// Game variables
let playerScore = 0;
let computerScore = 0;

// Possible choices
const choices = ["ROCK", "PAPER", "SCISSORS"];

function playGame(playerChoice) {
  // Remove hidden CSS class to show game details
  choiceDisplayContainer.classList.remove("hidden");
  scoreDisplayContainer.classList.remove("hidden");
  restartBtn.classList.remove("hidden");

  // Remove any previous styling from result text
  resultDisplay.classList.remove("greenText", "redText");

  // Randomly generate a choice for the computer
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Determine the result of the round based on the choices
  let result = getResult(playerChoice, computerChoice);

  // If player wins
  if (result === "YOU WIN!") {
    // Update score
    playerScore++;
    // Add CSS classes based on result
    resultDisplay.classList.add("greenText");
    // If player loses
  } else if (result === "YOU LOSE!") {
    // Update score
    computerScore++;
    // Add CSS classes based on result
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

function getResult(player, computer) {
  // If game result is a tie
  if (player === computer) {
    return "TIE!";
    // If player wins
  } else if (
    (player === "ROCK" && computer === "SCISSORS") ||
    (player === "PAPER" && computer === "ROCK") ||
    (player === "SCISSORS" && computer === "PAPER")
  ) {
    return "YOU WIN!";
    // If player loses
  } else {
    return "YOU LOSE!";
  }
}

function restart() {
  // Reset scores
  playerScore = 0;
  computerScore = 0;
  // Add CSS class to hide game details
  choiceDisplayContainer.classList.add("hidden");
  scoreDisplayContainer.classList.add("hidden");
  restartBtn.classList.add("hidden");
}

// When the player clicks any of game options
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // playGame() is called with their choice
    playGame(button.dataset.choice);
  });
});

// When the player clicks the restart button, the restart function is called
restartBtn.addEventListener("click", restart);
