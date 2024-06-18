let RandNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const startOver = document.querySelector('.resultParas');
const guesses = document.querySelector('.guesses');
const guess_rem = document.querySelector('.lastResult');
const userInput = document.querySelector('#guessField');
const loworHigh = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let prev_Guess = [];
let numGuess = 1;
let PlayGame = true;

if (PlayGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  // validate if its btwn 0 to 100, and its a number only.
  if (!isNaN(guess) && guess > 0 && guess <= 100) {
    checkGuess(guess);
  } else {
    loworHigh.innerHTML = 'Enter a Valid Number between 1 and 100';
  }
}
function checkGuess(guess) {
  numGuess += 1;
  prev_Guess.push(guess);
  console.log(`numGuess; ${numGuess}`);
  if (guess === RandNum) {
    loworHigh.innerHTML = 'you Won the Game.';
    endGame();
  } else {
    displayGuess(guess);
  }
}
function displayGuess(guess) {
  console.log(prev_Guess);
  //userInput.value ='';
  guesses.innerHTML += ` ${guess} `;
  guess_rem.innerHTML = ` ${11 - numGuess}`;

  if (numGuess > 10) {
    loworHigh.innerHTML = '0 guesses left.  ';
    endGame();
  } else if (guess < RandNum) {
    loworHigh.innerHTML = 'Number is too LOW';
  } else if (guess > RandNum) {
    loworHigh.innerHTML = 'Number is too HIGH';
  }
}

function endGame() {
  const span = document.createElement('span');
  span.innerText = `
  Random Number is: ${RandNum}`;
  loworHigh.appendChild(span);
  userInput.setAttribute('disabled', '');
  p.innerHTML = `<h2 id='newgame'>new Game</h2>`;
  startOver.appendChild(p);
  PlayGame = false;
  submit.setAttribute('disabled', '');
  NewGame();
}

function NewGame() {
  const newgame = document.querySelector('#newgame');
  newgame.addEventListener('click', function () {
    userInput.value = '';
    prev_Guess = [];
    numGuess = 1;
    RandNum = parseInt(Math.random() * 100 + 1);

    guesses.innerHTML = '';
    guess_rem.innerHTML = ` ${11 - numGuess}`;
    startOver.removeChild(p);
    userInput.removeAttribute('disabled', '');
    PlayGame = true;
    submit.removeAttribute('disabled', '');
  });
}
