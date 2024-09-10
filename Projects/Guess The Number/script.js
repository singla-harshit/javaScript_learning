let systemGuess = Math.ceil(Math.random() * 100);

const userGuess = document.querySelector("#guess");
const submit = document.querySelector("#submit");
const guessSlot = document.querySelector("#prev");
const attemptSlot = document.querySelector("#attempts");
const result = document.querySelector(".result");

let prevGuess = [];
let attempts = 10;

console.log(systemGuess);
submit.addEventListener("click", function (e) {
  if (submit.classList.contains("newGame")) {
    newGame();
  } 
  else {
    displayInfo(attempts, userGuess.value);
    if (attempts > 1) {
      attempts--;
      console.log(attempts);
      checkGuess(userGuess.value);
    } else {
      displayMessage(`You LOST <br> Actual number was ${systemGuess}`);
      endgame();
    }
  }
});

function checkGuess(guess) {
  if (guess == systemGuess) {
    displayMessage(`You WON !!.<br>You Guessed it Right <br> The Number was ${systemGuess}`);
    endgame();
  }
  if (guess < systemGuess) {
    displayMessage("Try Higher");
    userGuess.value = "";
  }
  if (guess > systemGuess) {
    displayMessage("Try Lower");
    userGuess.value = "";
  }
  
}

function displayInfo(attempts, guess) {
  attemptSlot.innerHTML = attempts - 1;
  guessSlot.innerHTML += `${guess} `;
}

function displayMessage(message) {
  result.innerHTML = message;
}

function endgame() {
    userGuess.setAttribute("disabled", "");
    submit.innerHTML = 'Play Again'
    submit.classList.add('newGame')
}

function newGame(){
    submit.removeAttribute('class','newGame')
    systemGuess = Math.ceil(Math.random() * 100);
    userGuess.value=''
    guessSlot.innerHTML=''
    attemptSlot.innerHTML= `10`
    result.innerHTML=''
    attempts=10;
    userGuess.removeAttribute("disabled", "");
}