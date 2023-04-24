// create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const score1 = document.getElementById("player1Scoreboard");
const score2 = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const showDisplayButton = () => {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
};
// Hook up a click event listener to the Roll Dice Button. Log
// out a randpm number btwn 1 and 6
const rollBtnn = () => {
  const dice = Math.floor(Math.random() * 6) + 1;
  if (player1Turn) {
    player1Score += dice;
    score1.textContent = player1Score;
    player1Dice.textContent = dice;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "player 2 turn";
  } else {
    player2Score += dice;
    score2.textContent = player2Score;
    player2Dice.textContent = dice;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "player 1 turn";
  }
  if (player1Score >= 20) {
    message.textContent = "player 1 has won! 😘";
    showDisplayButton();
  } else if (player2Score >= 20) {
    message.textContent = "player 2 has won! 🥳";
    showDisplayButton();
  }
  player1Turn = !player1Turn;
};
rollBtn.addEventListener("click", rollBtnn);
resetBtn.addEventListener("click", () => {
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";
  message.textContent = "player 1 turn";
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  player1Score = 0;
  player2Score = 0;
});
