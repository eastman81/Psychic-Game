var wins = 0;
var losses = 0;
var guesses = [];
var guessesLeft = 9;
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

// key clicks
document.onkeyup = function(event) {
 		
 		// Determines which key was pressed.
  		var userGuess = event.key;
  		var lettersPicked = guesses;
  		guesses.push(" " + userGuess);
  	
  		// Randomly chooses a letter
  		var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  		console.log(computerGuess);

  		if (userGuess === computerGuess) {
  			alert("You Guessed It!");
  			wins++;
  			reset();
  		}	else {
  			guessesLeft--;
  		}

  		if (guessesLeft < 1) {
  			alert("HA HA HA, Bow Down to the Great Machine!!");
  			losses++;
  			reset();
  		}

  		// Show HTML and updated vars
        var html =
          "<p>You Picked: " + userGuess + "</p>" +
          "<p>You Have Picked: " + lettersPicked + "</p>" +
          "<p>You Have " + guessesLeft + " Guesses Remaining</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#gameInfo").innerHTML = html;
}

    function reset () {
    	guesses = [];
    	guessesLeft = 9;
    }