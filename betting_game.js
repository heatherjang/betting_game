jQuery(document).ready()



var Game = {
  play: function() {
    var moneyRemaining = 100;
    while (moneyRemaining > 0) {
      alert("You have $" + moneyRemaining);
      var bet = Player.placeBet();
      // console.log("Bet: " + Bet);
      var randNumber = Game.generateRand();
      // console.log("Rand: " + RandNumber);
      var playerGuess = Player.chooseNumber();
      // console.log("Guess: " + PlayerGuess);
      var result = Game.checkGuess(randNumber, playerGuess);
      // console.log("Result: " + Result);
      moneyRemaining += (bet * result);
      // console.log(MoneyRemaining);
    }
  },

  generateRand: function() {
    return Math.floor(Math.random() * 10);
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

var Player = {

  placeBet: function() {
    var betAmount = prompt("How much do you want to bet?:");
    return betAmount
  },

  chooseNumber: function() {
    var number = prompt("Choose a number between 1-10:");
    return number;
  },

}

Game.play()




