// Rock Paper Scissors Game
// Author: David Watkin

const computerPlay = () => {
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
  const infoText = document.querySelector(".info-text");
  infoText.textContent = resultText;

  const playerScoreText = document.querySelector(".player-score");
  playerScoreText.textContent = playerScore;

  const computerScoreText = document.querySelector(".computer-score");
  computerScoreText.textContent = computerScore;

  const playerToken = document.querySelector(".player-token");
  playerToken.textContent = playerSelection[0];

  const computerToken = document.querySelector(".computer-token");
  computerToken.textContent = computerSelection[0];

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
  let gameWinner = "";
  if (playerScore === 5) {
    gameWinner = "PLAYER";
  }

  if (computerScore === 5) {
    gameWinner = "COMPUTER";
  }

  if (gameWinner) {
    const buttonArea = document.querySelector(".button-area");
    buttonArea.textContent = "";

    const winnerText = document.createElement("p");
    winnerText.textContent = `${gameWinner} WINS!`;
    winnerText.classList.add("winner-text");
    buttonArea.appendChild(winnerText);

    const infoArea = document.querySelector(".info-area");
    infoArea.removeChild(infoArea.lastElementChild);

    const playAgain = document.createElement("button");
    playAgain.textContent = "PLAY AGAIN?";
    playAgain.classList.add("play-again");
    playAgain.addEventListener("click", () => document.location.reload());
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
