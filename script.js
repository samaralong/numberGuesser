let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => 
  Math.floor(Math.random() * 10);

const compareGuesses = (human, computer, target) => {

  if (human < 0 || human > 9){
window.alert('Number needs to be between 0 and 9');
  end ;
  } 

  const humanDifference = Math.abs(target - human);
  const computerDifference = Math.abs(target - computer);

 if (humanDifference === computerDifference) {
   window.alert('It\'s a tie! Guess again.');
   end;
 }
if (humanDifference < computerDifference) {
    return true;
  } else {
    return false;
  }
}

const updateScore = (winner) => {
  if(winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

const advanceRound = () =>
  currentRoundNumber++;
