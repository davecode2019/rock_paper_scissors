const computerPlay = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const calculateWinner = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0; // 0 = Draw
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return 1; // 1 = Computer win
    } else {
      return 2; // 2 = Player win
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return 1; // 1 = Computer win
    } else {
      return 2; // 2 = Player win
    }
  } else {
    if (computerSelection === "rock") {
      return 1; // 1 = Computer win
    } else {
      return 2; // 2 = Player win
    }
  }
};

const playRound = (playerSelection) => {
  let computerSelection = computerPlay();
  let result = calculateWinner(playerSelection, computerSelection);
  if (result === 0) {
    console.log("Draw!");
  } else if (result === 1) {
    console.log(`Computer wins, ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  } else {
    console.log(`Player wins, ${playerSelection} beats ${computerSelection}`);
    playerScore++;
  }
  console.log(`Computer: ${computerScore}`);
  console.log(`Player: ${playerScore}`);
};

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    playRound(e.target.className);
  })
);
