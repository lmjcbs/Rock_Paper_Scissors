// Rock-Paper-Scissors Game
let playerScore = 0;
let computerScore = 0;
const testWin = /win/;
const testLose = /lose/;
const testDraw = /draw/;
const playerTile = document.querySelector('.player-score');
const computerTile = document.querySelector('.computer-score');
const gameInfo = document.querySelector('#game-info');
const outcome = document.createElement('h3');
const playerPoints = document.createElement('h3');
const computerPoints = document.createElement('h3');
let playerSelection = '';
const youWin = document.createElement('h3');
const youLose = document.createElement('h3');

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return 'It\'s a draw! No winner';
  } else return `You lose! ${computerSelection} beats ${playerSelection}`;
};

// Randomly generated computer choice
const getComputerChoice = () => {
  const ranNum = Math.floor(Math.random() * 3);
  return ranNum === 0 ? 'rock' : ranNum === 1 ? 'paper' : 'scissors';
};

const validateWinner = (result) => {
  if (testDraw.test(result)) {
    return;
  } else if (testWin.test(result)) {
    playerScore += 1;
  } else if (testLose.test(result)) {
    computerScore += 1;
  }
};

const displayWinner = (playerScore, computerScore) => {
  if (playerScore === 5) {
    youWin.textContent = `You win! ${playerScore} : ${computerScore}`;
    gameInfo.appendChild(youWin);
  } else if (computerScore === 5) {
    youLose.textContent = `You lose! ${playerScore} : ${computerScore}`;
    gameInfo.appendChild(youLose);
  }
};


const buttons = document.querySelectorAll('button');
// add event listener on click
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection = button.id;

    const result = playRound(playerSelection, getComputerChoice());

    validateWinner(result);

    displayWinner(playerScore, computerScore);

    outcome.textContent = result;
    gameInfo.appendChild(outcome);

    playerPoints.textContent = playerScore;
    playerTile.appendChild(playerPoints);

    computerPoints.textContent = computerScore;
    computerTile.appendChild(computerPoints);
  });
});

playerPoints.textContent = playerScore;
playerTile.appendChild(playerPoints);

computerPoints.textContent = computerScore;
computerTile.appendChild(computerPoints);
