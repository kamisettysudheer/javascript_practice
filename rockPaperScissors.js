// rock - 0  paper - 1  scissors - 2

//                  p c
// r p - p          0 1 - 1    c 
// r s - s          0 2 - 0    p
// p s - s          1 2 - 2    c
// p r - p          1 0 - 1    p
// s p - s          2 1 - 2    p
// s r - r          2 0 - 0    c  XXXXXXX
// p p - draw           
// s s - draw           
// r r - draw  

function getItem (number) {
    if (number === 0) {
        return "✊";
    }

    if (number === 1) {
        return "🖐️";
    }

    if (number === 2) {
        return "✌️";
    }
}

let playerScore = 0;
let computerScore = 0;
let isGameOver = false;

while (!isGameOver) {
    console.log("rock - 0 ; paper - 1 ; scissors - 2");

    const computerItem = Math.floor(Math.random() * 3);
    const playerItem = Number(prompt("enter your item:"));
    const isValidInput = playerItem === 0 || playerItem === 1 || playerItem === 2;

    console.log("player item:" , getItem(playerItem) , "\t" , "computer item:" , getItem(computerItem));

    if (!isValidInput) {
        console.log("input is invalid! \n");
    } else if (playerItem === computerItem) {
        console.log("draw \n");
    } else if (playerItem + 1 === computerItem) {
        console.log("computer won the round. \n");
        computerScore++;
    } else if (playerItem === 2 && computerItem === 0) {
        console.log("computer won the round. \n");
        computerScore++;
    } else {
        console.log("player won the round. \n");
        playerScore++;
    }

    if (playerScore === 5 || computerScore === 5) {
        isGameOver = true;
    }
    
}

const result = playerScore === 5 ? "🧑 player" : "🖥️ computer";

console.log(result , "won the game...");
