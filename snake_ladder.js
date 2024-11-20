function rollADie() {
  return Math.ceil(Math.random() * 6);
}

function ifSnake(position) {
  switch (position) {
    case 28:
      return 10;
    case 37:
      return 3;
    case 48:
      return 16;
    case 75:
      return 32;
    case 94:
      return 71;
    case 96:
      return 42;
    default:
      return position;
  }
}

function ifLadder(position) {
  switch (position) {
    case 4:
      return 56;
    case 12:
      return 50;
    case 14:
      return 55;
    case 22:
      return 58;
    case 41:
      return 79;
    case 54:
      return 88;
    default:
      return position;
  }
}

function player1Pos(player1, dieForPlayer1) {
  const playerPosition = player1 + dieForPlayer1;

  let player = ifSnake(playerPosition);

  if (player !== playerPosition) {
    console.log("----- 🐍 you got snake 🐍 -----\n");
    return player;
  }

  player = ifLadder(playerPosition);

  if (player !== playerPosition) {
    console.log("----- 🪜 you got ladder 🪜 -----\n");
    return player;
  }

  return playerPosition;
}

function player2Pos(player2, dieForPlayer2) {
  const playerPosition = player2 + dieForPlayer2;

  let player = ifSnake(playerPosition);

  if (player !== playerPosition) {
    console.log("----- 🐍 you got snake 🐍 -----\n");
    return player;
  }

  player = ifLadder(playerPosition);

  if (player !== playerPosition) {
    console.log("----- 🪜 you got ladder 🪜 -----\n");
    return player;
  }

  return playerPosition;
}

function startGame(player1, player2, player1Name, player2Name) {
  console.log("------------------------------------------------------------------");
  console.log("\t | " + player1Name + " position : " + player1 + "\t" + player2Name + " position : " + player2 + " | \n");

  if (player1 === 100 || player2 === 100) {
    return player1 === 100 ? "player1" : "player2";
  }

  const dieForPlayer1 = rollADie();
  const dieForPlayer2 = rollADie();

  prompt(player1Name + " chance : ", "press enter");
  console.log("rolling a die... \ndie value = " + dieForPlayer1 + "\n");
  player1 = player1Pos(player1, dieForPlayer1);

  prompt(player2Name + " chance : ", "press enter");
  console.log("rolling a die... \ndie value = " + dieForPlayer2 + "\n");
  player2 = player2Pos(player2, dieForPlayer2);

  player1 = player1 + dieForPlayer1 > 101 ? player1 - dieForPlayer1 : player1;
  player2 = player2 + dieForPlayer2 > 101 ? player2 - dieForPlayer2 : player2;

  return startGame(player1, player2, player1Name, player2Name);
}

function game() {
  const askToPlay = confirm("Do you want to start the SNAKE AND LADDER GAME!");

  if (askToPlay) {
    console.log("lets start the game.... \n");
    const player1Name = prompt("Enter player1 name : ", "player1");
    const player2Name = prompt("Enter player2 name : ", "player2");

    const winner = startGame(0, 0, player1Name, player2Name);

    return "\n\t🏆🏆🏆 " + (winner === "player1" ? player1Name : player2Name) + " won the game 🏆🏆🏆";
  }

  return "it's ok, you miss a chance to play with a great person!";
}

console.log(game());
