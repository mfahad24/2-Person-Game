var playerHealth = 40;
var grantHealth = 10;
var playerDamage = 0;
var grantDamage = 0;
var playerWins = 0;
var grantWins = 0;
var i = 0;
var playerName;
var attackOrQuit;

//startGame();

function startGame() {
  var playGame = prompt("Would you like to play a game with the Almighty Grant?")
  if (playGame === "Yes") {
    playerName = prompt('Name your character');
    startCombat();
  }
}

function startCombat() {
  while (playerWins < 3 && playerHealth > 0) {
    attackOrQuit = prompt('Do you want to attack or quit?');
    if (attackOrQuit === "quit") {
      break;
    }
    function getDamage(x) {
      return Math.floor(Math.random() * 3) + 2;
    }
    playerDamage = getDamage(playerDamage);
    grantDamage = getDamage(grantDamage);
    playerHealth -= playerDamage;
    console.log(playerName + " has " + playerHealth + " left.");
    grantHealth -= grantDamage;
    console.log("Almighty Grant has " + grantHealth + " left.");
    if (playerHealth <= 0) {
      grantWins++;
      //playerLoses++;
      console.log("Almighty Grant has " + grantWins + " wins.");
    }
    if (grantHealth <= 0) {
      playerWins++;
      //grantLoses++;
      grantHealth = 10;
      console.log(playerName + " has " + playerWins + " wins.");
    }
    i++;
  }

  if (playerWins === 3) {
    console.log(playerName + " has won the game. You have beaten the Almighty Grant. Go get yourself a cookie!");
  } else if (playerHealth <= 0) {
    console.log("Almighty Grant has won the game. You need to sharpen up your game " + playerName);
  } else if (attackOrQuit === "quit") {
    console.log(playerName + " has quit the game. Come play again soon!");
}
}
