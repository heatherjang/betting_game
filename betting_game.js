$(function() {

  var MIN_BET = 5;
  var MAX_BET = 500;
  var MIN_GUESS = 1;
  var MAX_GUESS = 10;

  var Player = {

    money: 100,

    placeBet: function(betAmount) {
      if (betAmount < MIN_BET || betAmount > MAX_BET) {
        alert('Invalid bet!');
        return false;
      }
      return betAmount;
    },

    chooseNumber: function(guess) {
      if (guess < MIN_GUESS || guess > MAX_GUESS) {
        alert('Invalid bet!');
        return false;
      }
      return guess;
    },

  }
  // Displays available money before game start
  $('#player-money').val(Player.money);

  var Game = {

    play: function() {
      var betAmount, randNumber, playerGuess, result;
      if (Player.money < MIN_BET) {
        alert('Game over. No more money left!');
        return;
      }
      betAmount = Player.placeBet($('#player-bet').val());
      if (!betAmount) {
        return;
      }
      console.log("Bet: " + betAmount);

      randNumber = Game.generateRand();
      console.log("Rand: " + randNumber);

      playerGuess = Player.chooseNumber($('#player-guess').val());
      if (!playerGuess) {
        return;
      }
      console.log("Guess: " + playerGuess);

      $('#random-number').val(randNumber);

      result = Game.checkGuess(randNumber, playerGuess);
      console.log("Result: " + result);
      
      Player.money += (betAmount * result);
      console.log(Player.money);
      $('#player-money').val(Player.money);

    },

    generateRand: function() {
      return Math.ceil(Math.random() * MAX_GUESS);
    },

    checkGuess: function(rand_num, guess) {
      if (guess == rand_num) {
        alert("You were correct!");
        return 2;
      } else if (Math.abs(guess - rand_num) == 1) {
        alert("Close, but not quite.");
        return 0;
      } else {
        alert("You lose");
        return -1;
      }
    },

  }

  $('#start-game').click(Game.play);

});
