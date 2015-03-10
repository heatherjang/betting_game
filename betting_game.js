$(function() {

  var MIN_BET = 5;
  var MAX_BET = 500;
  var MIN_GUESS = 1;
  var MAX_GUESS = 10;

  var Player = {

    money: 100,

    placeBet: function() {
      var betAmount = prompt("Place your bet (between $5-10):");
      if (betAmount < MIN_BET || betAmount > MAX_BET) {
        alert("Invalid bet!");
        return false;
      }
      return betAmount;
    },

    chooseNumber: function() {
      var guess = prompt("Choose a number between 1-10:");
      if (guess < MIN_GUESS || guess > MAX_GUESS) {
        return false;
      }
      return guess;
    },

  }
  // Displays available money before game start
  $('#player-money').val(Player.money);

  var Game = {

    play: function() {
      if (Player.money < MIN_BET) {
        alert('Game over. No more money left!');
        return;
      }
      while (Player.money >= MIN_BET) {
        var bet = Player.placeBet();
        if (!bet) {
          continue;
        }
        console.log("Bet: " + bet);
        var randNumber = Game.generateRand();
        console.log("Rand: " + randNumber);
        var playerGuess = Player.chooseNumber();
        if (!playerGuess) {
          continue;
        }
        $('#random-number').val(randNumber);

        console.log("Guess: " + playerGuess);
        var result = Game.checkGuess(randNumber, playerGuess);
        console.log("Result: " + result);
        Player.money += (bet * result);
        console.log(Player.money);
        $('#player-money').val(Player.money);

      }
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
