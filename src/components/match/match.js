import players from "../../players/index.js";
import gameResult from "../../validators/gameResult.js";
import moveTest from "../../validators/moveTest.js";
import modal from "../Modal/index.js";

class Match {
  constructor(player1, player2, match, scorePlayer1, scorePlayer2) {
    this.player1 = players.getByName(player1);
    this.player2 = players.getByName(player2);
    this.$fieldList = document.querySelectorAll(".field");
    this.match = match
  }

  async run(callBack, onOk) {
    const recusiveRun = (move) => {
      const scenery = [...document.querySelectorAll(".field")].map(($field) => $field.textContent);

      const result = gameResult();

      const atualMove = move ? move : "X";
      const player = atualMove === "X" ? this.player1 : this.player2;

      if (result) return callBack(result)
      
      const moveIndex = player.script(scenery, atualMove);

      const validMove = moveTest(moveIndex, atualMove, onOk)

      console.log('validMove', validMove)

      if (!validMove) return callBack({ invalid: true, move: atualMove })
      
      this.$fieldList[moveIndex].textContent = atualMove;

      const newMove = atualMove === "X" ? "O" : "X";

      setTimeout(() => {
        recusiveRun(newMove);
      }, 500);
    };

    const isOdd = !!(this.match % 2)

    recusiveRun(isOdd ? 'X' : 'O')
  }
}

export default Match;
