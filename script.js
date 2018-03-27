(function() {

  startGame();
  // console.log("Hello");

  var i = 0;

  function startGame() {
console.log("Hello");
    var playGame = prompt("Would you like to play a game with the Almighty Grant?")
    if (playGame === "Yes" || playGame === "yes" || playGame === "YES") {
      playerName = prompt('Name your character');
      startCombat();
    }
  }

  function startCombat() {
console.log("Hello");
    var attackButton = document.getElementById("attackButton");
    var healButton = document.getElementById("healButton");
    var quitButton = document.getElementById("quitButton");
    var playerHealthBar = document.getElementById("playerHealth");
    var opponentHealthBar = document.getElementById("opponentHealth");
    var playerHealsBar = document.getElementById("healCount");
    var playerWins = document.getElementById("winCount");
    var messageGame = document.getElementById("message");
    var startButton1 = document.getElementById("startButton");
    var displayDiv1 = document.getElementById("attackandstats");
    var restart = document.getElementById("restartButton");
    var hideonwin = document.getElementById("wordsandbars");

    var player = {
      Name: playerName,
      Health: 40,
      HealsLeft: 2,
      Wins: 0,
      attackDamage: function() {
        return Math.floor(Math.random() * 2) + 1;
        //Math.floor rounds a number downward to its nearest integer
        //Math.random returns random number between 0 and 1
        //* 2 + 1 can possibly return lowest number of 0 and highest number of 3
      },
      healsRandom: function() {
        return Math.floor(Math.random() * 9) + 1;
//lowest is 0 and highest is 10
      }
    };

    var opponent = {
      Name: "Almighty Grant",
      Health: 10,
      Wins: 0,
      attackDamage: function() {
        return Math.floor(Math.random() * 4) + 1;
        //lowest is 0 and highest is 5
      }
    };
    startButton1.onclick = function() {
      startButton1.classList.remove("appear");
      startButton1.classList.add("disappear");
      displayDiv1.classList.remove("bigdiv");
      // displayDiv2.classList.remove("disappear1");
      // startGame();
    }

    attackButton.onclick = function() {
      player.Health -= player.attackDamage();
      opponent.Health -= opponent.attackDamage();
      if (player.Health <= 0) {
        opponent.Wins++;
      }
      if (opponent.Health <= 0) {
        player.Wins++;
        opponent.Health = opponent.Health += 10;
      }
      updateDisplay();
      if (player.Wins < 5) {
        updateMessage(player.Name + " has " + player.Health + " left. Almighty Grant has " + opponent.Health + " left.");
      } else {
        updateMessage(player.Name + " has won the game. You have beaten the Almighty Grant. Go get yourself a cookie!")
        hideonwin.style.display = "none";

      }
    };

    healButton.onclick = function() {
      if (player.HealsLeft > 0) {
        player.Health += player.healsRandom();
        player.HealsLeft--;
        updateDisplay();
        updateMessage(player.Name + " has " + player.HealsLeft + " more healing opportunity left. " + player.Name + " has healed and has " + player.Health + " health.");
      }
    }

    quitButton.onclick = function() {
      updateMessage(player.Name + " has quit the game. Come play again soon!");
      hideonwin.style.display = "none"; 
    }

    function updateDisplay() {
      playerHealthBar.value = player.Health;
      opponentHealthBar.value = opponent.Health;
      playerHealsBar.value = player.HealsLeft;
      playerWins.value = player.Wins;
    }

    function updateMessage(newMessage) {
      messageGame.innerText = newMessage;
    }

    restart.onclick = function () {
      window.location.reload();
    }
  }
})(); // this is for self closing function
