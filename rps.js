// Rock Paper Scissors Game
// Author: David Watkin

const computerPlay = () => {
  // Randomly picks 0, 1 or 2 and returns an appropriate string value.
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
};

const playRound = (playerSelection) => {
  // Takes players choice, generates a computer random response, passes to calculateWinner
  // function to decide winner. Based on winner, generates text for display in GUI and
  // increments the appropriate score. Finally passes all information to the updateScreen function.
  let computerSelection = computerPlay();
  let result = calculateWinner(playerSelection, computerSelection);
  let winner = "";
  switch (result) {
    case 0:
      resultText = "Draw!";
      break;
    case 1:
      resultText = `Computer wins, ${computerSelection} beats ${playerSelection}`;
      computerScore++;
      winner = "computer";
      break;
    case 2:
      resultText = `Player wins, ${playerSelection} beats ${computerSelection}`;
      playerScore++;
      winner = "player";
      break;
  }
  updateScreen(playerSelection, computerSelection, winner);
};

const calculateWinner = (playerSelection, computerSelection) => {
  // Calculates the winner of a round based on selection based conditions.
  // Returns a number value indicating winner.
  if (playerSelection === computerSelection) {
    return 0; // 0 = Draw
  }
  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return 1; // 1 = Computer win
    } else {
      return 2; // 2 = Player win
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      return 1; // 1 = Computer win
    } else {
      return 2; // 2 = Player win
    }
  } else {
    if (computerSelection === "Rock") {
      return 1; // 1 = Computer win
    } else {
      return 2; // 2 = Player win
    }
  }
};

const updateScreen = (playerSelection, computerSelection, winner) => {
  // Updates the GUI at the end of each round, showing the results and ongoing scores.
  // Passes off to the checkGameOver function to check if an end game condition has been met.
  const infoText = document.querySelector(".info-text");
  infoText.textContent = resultText;

  const playerScoreText = document.querySelector(".player-score");
  playerScoreText.textContent = playerScore;

  const computerScoreText = document.querySelector(".computer-score");
  computerScoreText.textContent = computerScore;

  const playerToken = document.querySelector(".player-token");
  playerToken.textContent = playerSelection[0]; // Just first letter of choice displayed.

  const computerToken = document.querySelector(".computer-token");
  computerToken.textContent = computerSelection[0]; // Just first letter of choice displayed.

  // Highlights the winner of each round using css clas token-win.
  // Previous rounds highlight removed prior to adding new winner.
  computerToken.classList.remove("token-win");
  playerToken.classList.remove("token-win");
  if (winner === "computer") {
    computerToken.classList.add("token-win");
  }

  if (winner === "player") {
    playerToken.classList.add("token-win");
  }
  checkGameOver();
};

const checkGameOver = () => {
  // Checks to see if either player has achieved a score of 5.
  // If 5 has been achieved, choice buttons are removed from GUI
  // and replaced with text detailing winner.
  // A play again button is placed at the bottom of the screen,
  // replaces instructional text. Pressing button reloads the GUI to initial state.
  let gameWinner = "";
  if (playerScore === 5) {
    gameWinner = "PLAYER";
  }

  if (computerScore === 5) {
    gameWinner = "COMPUTER";
  }

  if (gameWinner) {
    const buttonArea = document.querySelector(".button-area");
    buttonArea.textContent = ""; // Clear contents of div (selection buttons)

    const winnerText = document.createElement("p");
    winnerText.textContent = `${gameWinner} WINS!`;
    winnerText.classList.add("winner-text");
    buttonArea.appendChild(winnerText);

    const infoArea = document.querySelector(".info-area");
    infoArea.removeChild(infoArea.lastElementChild);

    const playAgain = document.createElement("button");
    playAgain.textContent = "PLAY AGAIN?";
    playAgain.classList.add("play-again");
    playAgain.addEventListener("click", () => document.location.reload()); // Reload GUI.
    infoArea.appendChild(playAgain);
  }
};

let playerScore = 0;
let computerScore = 0;
let resultText = "";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    playRound(e.target.id);
  })
);
