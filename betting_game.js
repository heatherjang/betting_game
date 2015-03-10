$(function() {

  var MIN_BET = 5;
  var MAX_BET = 500;
  var MIN_GUESS = 1;
  var MAX_GUESS = 10;

  var Player = {
    money: 100,

    placeBet: function(amount) {
      var betAmount = parseInt(amount, 10) || 0;
      if (betAmount < MIN_BET || betAmount > MAX_BET) {
        alert('Invalid bet!');
        return false;
      } else if (betAmount > Player.money) {
        alert("You can't bet more than you have!")
        return false;
      }
      return betAmount;
    },

    guessNumber: function(guess) {
      var number = parseInt(guess, 10) || 0;
      if (number < MIN_GUESS || number > MAX_GUESS) {
        alert('Invalid guess! Guess must be a number between 1-10');
        return false;
      }
      return number;
    },
  }  

  var Game = {
    play: function() {
      var betAmount, playerGuess, randNumber;
      if (Player.money < MIN_BET) {
        alert('Game over. No more money left!');
        return;
      }
      betAmount = Player.placeBet($('#player-bet').val());
      if (!betAmount) {
        return;
      }
      playerGuess = Player.guessNumber($('#player-guess').val());
      if (!playerGuess) {
        return;
      }
      randNumber = (Math.ceil(Math.random() * MAX_GUESS));
      $('#random-number').val(randNumber);

      Game.evaluateGuess(randNumber, betAmount, playerGuess);

      $('#player-money').val(Player.money);
    },

    evaluateGuess: function(randNum, bet, guess) {
      if (guess === randNum) {
        alert("Nailed it!");
        Player.money += bet;
        return Player.money;
      } else if (Math.abs(guess - randNum) === 1) {
        alert("Close, but no cigar");
        return Player.money;
      } else {
        alert("Wrong. You lose.");
        Player.money -= bet;
        return Player.money;
      }
    },
  }

  // Display available money before game start
  $('#player-money').val(Player.money);
  // Run the program
  $('#start-game').click(Game.play);
});
