import Match from "./components/match/match.js";
import players from "./players/index.js";
import CardListPriter from "./printers/cardList.js";

const $buttonStart = document.querySelector(".button-start");
const $buttonResetBoard = document.querySelector(".button-reset-board");
const $buttonResetScore = document.querySelector(".button-reset-score");
const $matchNumber = document.querySelector('.match-number')

let matchIndex = 0;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let game = true;

$buttonStart.addEventListener("click", () => {
  const $selectedPlayers = document.querySelectorAll(".card-selected");
  const player1 = $selectedPlayers[0].getAttribute("data-value");
  const player2 = $selectedPlayers[1].getAttribute("data-value");

  $selectedPlayers.forEach(($player, index) => {
    const $scoreBoardName = document.querySelector(`.player-${index + 1}-name`);
    const playerName = $player.getAttribute("data-value");
    const move = index === 0 ? 'X' : 'O'

    $scoreBoardName.textContent = move === 'X' ? `X ${playerName}` : `${playerName} O`;
  });
  
  const runMatch = () => {
    matchIndex++
    $matchNumber.textContent = matchIndex
    const match = new Match(player1, player2, matchIndex);
    match.run((result) => {
      if (result === "X") scorePlayer1++;
      if (result === "O") scorePlayer2++;
      if (result?.invalid){
        result.move === 'X' ? scorePlayer2++ : scorePlayer1++
        game = false
        
        return
      }
      
      $matchNumber.textContent = matchIndex

      printPonts()
      
      if (result) resetFields()
      if (result && game) runMatch()
    }, printPonts);
  }
  runMatch()
});

const resetFields = () => {
  const $fieldList = document.querySelectorAll(".field");

  $fieldList.forEach(($field) => ($field.textContent = ""));
}

const printPonts = () => {
  const $scorePlayer1 = document.querySelector(".player-1-score");
  const $scorePlayer2 = document.querySelector(".player-2-score");

  $scorePlayer1.textContent = scorePlayer1;
  $scorePlayer2.textContent = scorePlayer2;
}

$buttonResetBoard.addEventListener("click", () => {
  resetFields()
});

$buttonResetScore.addEventListener('click', () => {
  const $scoreList = document.querySelectorAll('.player-score')

  $scoreList.forEach($score => ($score.textContent = '0'))
  scorePlayer1 = 0
  scorePlayer2 = 0
})

CardListPriter(players.getAll());
