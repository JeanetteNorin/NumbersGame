

playGame();

function playGame() {
  var randomNumber = Math.floor(Math.random()*10)+1;
  console.log(randomNumber);
  var counter = 0;
  var loop = true;

  do {
    var guess = parseInt(prompt("Enter your guess"));
    if (guess === randomNumber) {
      alert("Correct!");
      loop = false;
    }
    else if (isNaN(guess) ) {
      alert("That's not a number, stupid!");
      counter++;
    }
    else {
      if (guess < randomNumber) {
        alert("Your guess is too low.");
      }
      else {
          alert("Your guess is too high.");
      }
      counter++;
    }
  }
  while (loop === true && counter < 3)
  if (loop) {
    alert("You have used all your guesses! Game over!");
    playAgain();
  }
  else {
    alert("WINNER!");
    playAgain();
  }
}

function playAgain() {
  var playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    playGame();
  }
  else {
    alert("LOSER!");
  }
}
