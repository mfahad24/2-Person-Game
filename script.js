// (function () {

startGame();

var i = 0;

function startGame() {

  var playGame = prompt("Would you like to play a game with the Almighty Grant?")
  if (playGame === "Yes") {
   playerName = prompt('Name your character');
    startCombat();
  }
}

function startCombat() {


 var attackButton = document.getElementById("attackButton");
 var healButton = document.getElementById("healButton");
 var quitButton = document.getElementById("quitButton");
 var playerHealthBar = document.getElementById("playerHealth");
 var opponentHealthBar = document.getElementById("opponentHealth");
 var playerHealsBar = document.getElementById("healCount");
 var playerWins = document.getElementById("winCount");
 var messageGame = document.getElementById("message");
 var startButton1 = document.getElementById("startButton");
 // var displayDiv1 = document.getElementById("attackdiv");
 // var displayDiv2 = document.getElementById("statsdiv");

    var player = {
    Name: playerName,
    Health: 40,
    HealsLeft: 2,
    Wins: 0,
    attackDamage: function() {
      return Math.floor(Math.random() * 2) + 1;
    },
    healsRandom: function() {
      return Math.floor(Math.random() * 9) + 1;
    }
  };

  var opponent = {
    Name: "Almighty Grant",
    Health: 10,
    Wins: 0,
    attackDamage: function() {
      return Math.floor(Math.random() * 4) + 1;
    }
  };
  // startButton1.onclick = function () {}
  //      startButton1.classList.remove("appear");
  //      startButton1.classList.add("disappear");
  //    }

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
        } else { updateMessage(player.Name + " has won the game. You have beaten the Almighty Grant. Go get yourself a cookie!")
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
  }

//   if (player.Health <= 0) {
//     opponent.Wins++;
//     console.log("Almighty Grant has " + opponent.Wins + " wins.");
//   }
//   if (opponent.Health <= 0) {
//     player.Wins++;
//     opponent.Health = opponent.Health += 10;
//     console.log(opponent.Name + " has regenerated and now has " + opponent.Health + " health points.")
//     console.log(player.Name + " has " + player.Wins + " wins.");
//   }
// //   i++;
//   }
//
// if (player.Wins === 5) {
//   console.log(player.Name + " has won the game. You have beaten the Almighty Grant. Go get yourself a cookie!");
// } else if (player.Health <= 0) {
//   console.log("Almighty Grant has won the game. You need to sharpen up your game " + player.Name);
// } else if (attackOrQuit === "quit") {
//   console.log(player.Name + " has quit the game. Come play again soon!");
// }
// })();  // this is for self closing function
