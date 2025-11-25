//All HTML elements.
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result-alert");

//Both players' score.
let playerWins = 0;
let computerWins = 0;

const playRockPapperScissors = (playerChoiceInt) => {
  let randomChance = Math.floor(Math.random() * 2 + 1);
  let playerChoice = "";
  let computerChoice = "";

  //Assign random number to respective move.
  if (randomChance === 1) {
    computerChoice = "Rock";
  } else if (randomChance === 2) {
    computerChoice = "Paper";
  } else if (randomChance === 3) {
    computerChoice = "Scissors";
  } else {
    alert("Error!");
  }

  //Check who won.
  if (playerChoiceInt === 1) {
    playerChoice = "Rock";
    if (computerChoice === "Rock") {
      resultDisplay.textContent = "Draw!";
    } else if (computerChoice === "Paper") {
      resultDisplay.textContent = "You lose!";
      computerWins += 1;
      computerScoreDisplay.textContent = "Computer's score: " + computerWins;
    } else if (computerChoice === "Scissors") {
      resultDisplay.textContent = "You win!";
      playerWins += 1;
      playerScoreDisplay.textContent = "Your Score: " + playerWins;
    }
  } else if (playerChoiceInt === 2) {
    playerChoice = "Paper";
    if (computerChoice === "Rock") {
      resultDisplay.textContent = "You win!";
      playerWins += 1;
      playerScoreDisplay.textContent = "Your Score: " + playerWins;
    } else if (computerChoice === "Paper") {
      resultDisplay.textContent = "Draw!";
    } else if (computerChoice === "Scissors") {
      resultDisplay.textContent = "You lose!";
      computerWins += 1;
      computerScoreDisplay.textContent = "Computer's score: " + computerWins;
    }
  } else if (playerChoiceInt === 3) {
    playerChoice = "Scissors";
    if (computerChoice === "Rock") {
      resultDisplay.textContent = "You lose!";
      computerWins += 1;
      computerScoreDisplay.textContent = "Computer's score: " + computerWins;
    } else if (computerChoice === "Paper") {
      resultDisplay.textContent = "You win!";
      playerWins += 1;
      playerScoreDisplay.textContent = "Your Score: " + playerWins;
    } else if (computerChoice === "Scissors") {
      resultDisplay.textContent = "Draw!";
    }
  }

  //Show both players' choice.
  playerChoiceDisplay.textContent = "Your Choice: " + playerChoice;
  computerChoiceDisplay.textContent = "Computer's Choice: " + computerChoice;
};
