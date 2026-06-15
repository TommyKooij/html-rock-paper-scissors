const choices = ["rock", "paper", "scissors"];

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result-alert");

let playerScore = 0;
let computerScore = 0;

// Attach events cleanly
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
  });
});

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

function determineWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }

  return "computer";
}

function updateUI(player, computer, result) {
  playerChoiceDisplay.textContent = `Your Choice: ${player}`;

  computerChoiceDisplay.textContent = `Computer's Choice: ${computer}`;

  if (result === "draw") {
    resultDisplay.textContent = "Draw!";
  }

  if (result === "player") {
    resultDisplay.textContent = "You win!";
    playerScore++;
  }

  if (result === "computer") {
    resultDisplay.textContent = "You lose!";
    computerScore++;
  }

  playerScoreDisplay.textContent = `Your Score: ${playerScore}`;

  computerScoreDisplay.textContent = `Computer's Score: ${computerScore}`;
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  const result = determineWinner(playerChoice, computerChoice);

  updateUI(playerChoice, computerChoice, result);
}
