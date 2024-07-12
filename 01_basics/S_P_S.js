const arr = ["rock","paper","scissors"]

let compChoice = arr[Math.floor((Math.random())*3)]
let userChoice = prompt("What is your choice(Rock,Paper,Scissors)?")

if (userChoice.toUpperCase() == compChoice.toUpperCase()) {
    alert("it's a draw!");
} else if ((userChoice.toLowerCase() == 'rock' && compChoice == 'scissors')) {
    alert("You win! Rock beats scissors.");
} else if ((userChoice.toLowerCase() == 'rock' && compChoice == 'paper')) {
    alert("You lose! Paper beats rock.");
} else if ((userChoice.toLowerCase() == 'paper' && compChoice == 'rock')) {
    alert("You win! Paper beats rock.");
} else if ((userChoice.toLowerCase() == 'paper' && compChoice == 'scissors')) {
    alert("You lose! Scissors beats paper.");
} else if ((userChoice.toLowerCase() == 'scissors' && compChoice == 'paper')) {
    alert("You win! Scissors beats paper.");
} else if ((userChoice.toLowerCase() == 'scissors' && compChoice == 'rock')) {
    alert("You lose! Rock beats scissors.");
}