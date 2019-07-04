// Rock-Paper-Scissors Game
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  const testWin = /win/;
  const testLose = /lose/;
  const testDraw = /draw/;
  const playerSelection = playerInput.toLowerCase();

  const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
      return 'It\'s a draw! No winner';
    } else return `You lose! ${computerSelection} beats ${playerSelection}`;
  };

  // Random generated computer choice
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
    if (playerScore > computerScore) {
      return `You win! ${playerScore} : ${computerScore}`;
    } else if (computerScore > playerScore) {
      return `You lose! ${playerScore} : ${computerScore}`;
    } else return `It\'s a draw! ${playerScore} : ${computerScore}`;
  };

  // Best of 5
  for (let i = 0; i < 5; i += 1) {
    const result = playRound(playerSelection, getComputerChoice());
    validateWinner(result);
  }

  return displayWinner(playerScore, computerScore);
};

const playerInput = 'Rock';
console.log(game());
