// Rock-Paper-Scissors Game
let playerScore = 0;
let computerScore = 0;

// Randomly generated computer choice
const getComputerChoice = () => {
  const ranNum = Math.floor(Math.random() * 3);
  return ranNum === 0 ? 'rock' : ranNum === 1 ? 'paper' : 'scissors';
};

// Checks game state
const isGameFinished = (playerScore, computerScore) => {
  return playerScore > 4 ? true : computerScore > 4 ? true : false;
};

// Plays single round of game
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
      playerSelection === 'scissors' && computerSelection === 'paper' ||
      playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore += 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return 'It\'s a draw! No winner';
  } else {
    computerScore += 1;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  };
};

const playerTile = document.querySelector('.player-score');
const computerTile = document.querySelector('.computer-score');
const gameInfo = document.querySelector('#game-info');
const outcome = document.createElement('h3');
const playerPoints = document.createElement('h3');
const computerPoints = document.createElement('h3');
const youWin = document.createElement('h3');
const youLose = document.createElement('h3');

const updatePoints = () => {
  playerPoints.textContent = playerScore;
  playerTile.appendChild(playerPoints);

  computerPoints.textContent = computerScore;
  computerTile.appendChild(computerPoints);
};

const displayOutcome = () => {
  outcome.textContent = playRound(playerSelection, getComputerChoice());
  gameInfo.appendChild(outcome);
};

const playerWins = () => {
  youWin.textContent = `You win! ${playerScore} : ${computerScore}`;
  gameInfo.appendChild(youWin);
};

const computerWins = () => {
  youLose.textContent = `You lose! ${playerScore} : ${computerScore}`;
  gameInfo.appendChild(youLose);
};

const resetScores = () => {
  playerScore = 0;
  computerScore = 0;
};

const startRound = () => {
  displayOutcome();
  updatePoints();
  if (isGameFinished(playerScore, computerScore)) {
    if (playerScore > computerScore) {
      playerWins();
      resetScores();
    } else {
      computerWins();
      resetScores();
    }
  }
};

updatePoints();

const buttons = document.querySelectorAll('button');
// add event listener on click
buttons.forEach((button) => {
  playerSelection = button.id;
  button.addEventListener('click', (e) => {
    startRound();
  });
});
