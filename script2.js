$( document ).ready(function() {
  var randomNumber;
  var counter;
  $(".message").hide();
  $(".modal").show();


  function newGame() {
    $(".modal").hide();
    $("p").remove();
    $("input").val("").focus();
    randomNumber = Math.floor(Math.random()*10)+1;
    console.log(randomNumber);
    counter = 0;
    $("button[name='Submit']").show();
    $("body").on('keypress', 'input', function(args) {
        if (args.keyCode == 13) {
            $("button[name='Submit']").click();
            return false;
    }})
  }

  function compareNumbers(guess, randomNumber) {
    if (guess === randomNumber) {
      console.log("correctguess");
      var perfectGuess = "You guessed " + guess + ". You win!";
      displayMessage(perfectGuess);
      $("button[name='Submit']").hide();
      $("body").on('keypress', 'input', function(args) {
          if (args.keyCode == 13) {
              $("button[name='restart']").click();
              return false;
      }})
    }
    else if (guess > randomNumber) {
      var highGuess = "You guessed " + guess + ". Your guess is too high.";
      displayMessage(highGuess);
      checkCounter();
      console.log("highGuess");
      }
    else if (guess < randomNumber) {
      var lowGuess = "You guessed " + guess + ". Your guess is too low.";
      displayMessage(lowGuess);
      checkCounter();
      console.log("lowGuess");
      }
  }

  function displayMessage(guessResult) {
    $(".message").show().append("<p>" + guessResult + "</p>");
    console.log("MESSAGE");
  }

  function checkCounter(){
    console.log("checkCounter");
    var maxCount = 2;
    if (counter < maxCount) {
      counter++;
    }
    else {
      var outOfTries = "You're out of guesses. The correct guess was " + randomNumber + ". Click restart to try again!";
      displayMessage(outOfTries);
      $("button[name='Submit']").hide();
      $("body").on('keypress', 'input', function(args) {
          if (args.keyCode == 13) {
              $("button[name='restart']").click();
              return false;
      }})
    }
  }

  $("button[name='Submit']").click(function() {
    var guess = parseInt($("input").val());
    compareNumbers(guess, randomNumber);
    $("input").val("").focus();
    console.log("ENTER");
    flyEnterButton();
  });

  $("button[name='restart']").click(function() {
    newGame();
    console.log("RESTART");
  });

  $("button[name='chickenOut']").click(function() {
    //display loser message
  });

  $("button[name='play']").click(function() {
    newGame();
  });



  function flyEnterButton() {
    if (counter > 2) {
      console.log("YAY");
    }
    else {
      console.log("NO");
    }
  }
});
