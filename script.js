var i = 0;

function startGame() {
  var playGame = prompt("Would you like to play a game with the Almighty Grant?")
  if (playGame === "Yes") {
    playerName = prompt('Name your character');
    startCombat();
  }
}

function startCombat() {
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
  while (player.Wins < 5 && player.Health > 0) {
    attackOrQuit = prompt('Do you want to attack, heal or quit?');
    if (attackOrQuit === "heal" && player.HealsLeft > 0) {
      player.Health += player.healsRandom();
      player.HealsLeft--;
      console.log(player.Name + " has " + player.HealsLeft + " more healing opportunity left.");
      console.log(player.Name + " has healed and has " + player.Health + " health.");

    } else if (attackOrQuit === "attack") {
      player.Health -= player.attackDamage();
      opponent.Health -= opponent.attackDamage();

      console.log(player.Name + " has " + player.Health + " left.");
      console.log("Almighty Grant has " + opponent.Health + " left.");
    } else if (attackOrQuit === "quit") {
      break;
    }

    if (player.Health <= 0) {
      opponent.Wins++;
      console.log("Almighty Grant has " + opponent.Wins + " wins.");
    }
    if (opponent.Health <= 0) {
      player.Wins++;
      opponent.Health = opponent.Health += 10;
      console.log(opponent.Name + " has regenerated and how has " + opponent.Health + " health points.")
      console.log(player.Name + " has " + player.Wins + " wins.");
    }
    i++;
  }

  if (player.Wins === 5) {
    console.log(player.Name + " has won the game. You have beaten the Almighty Grant. Go get yourself a cookie!");
  } else if (player.Health <= 0) {
    console.log("Almighty Grant has won the game. You need to sharpen up your game " + player.Name);
  } else if (attackOrQuit === "quit") {
    console.log(player.Name + " has quit the game. Come play again soon!");
  }
}
