let score = JSON.parse(localStorage.getItem('score')) || {
    WINS: 0,
    LOSSES :0,
    Ties: 0
  };

document.querySelector('.js-scores').innerText =`WIN: ${score.WINS}. LOSSES: ${score.LOSSES}. TIES: ${score.TIES}.`;

// if(!score){
//   score = {
//     WINS: 0,
//     LOSSES :0,
//     Ties: 0
//   };
// };

function playGame(playerMove){
  const computerMove = pickComputerMove();
  
  let result = '';
          
  if (playerMove === 'ROCK'){
    if(computerMove === 'ROCK'){
      result='Tie.';
    }else if (computerMove === 'SISSORS'){
      result='You win.'
    }else if (computerMove === 'PAPER'){
      result='You lose.'
    }
  }else if (playerMove === 'SISSORS'){
    if(computerMove === 'ROCK'){
      result='You lose.';
    }else if (computerMove === 'SISSORS'){
      result='Tie.'
    }else if (computerMove === 'PAPER'){
      result='You win.'
    }
  }else if (playerMove === 'PAPER'){
    if(computerMove === 'ROCK'){
      result='You win.';
    }else if (computerMove === 'SISSORS'){
      result='You lose.'
    }else if (computerMove === 'PAPER'){
      result='Tie.'
    }
  }


  if (result === 'You win.'){
      score.WINS+=1;
      document.querySelector('.js-result').innerText = 'You win.';
  }else if (result === 'You lose.'){
      score.LOSSES+=1;
      document.querySelector('.js-result').innerText = 'You lose.';
  }else if (result === 'Tie.'){
      score.TIES+=1;
      document.querySelector('.js-result').innerText = 'Tie.';
  }
  

  document.querySelector('.js-move').innerText = `You pick ${playerMove}. Computer pick ${computerMove}.`;
  document.querySelector('.js-scores').innerText =`WIN: ${score.WINS}. LOSSES: ${score.LOSSES}. TIES: ${score.TIES}.`;
  localStorage.setItem('score', JSON.stringify(score))

}
function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >=0 && randomNumber < 1/3){
    computerMove = 'ROCK';
  } else if( randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'PAPER';
  } else if ( randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'SISSORS';
  }
  return computerMove;
}
