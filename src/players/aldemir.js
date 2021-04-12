const marcosScript = (scenery, myMove) => {
  const nextTurn = {
    X: "O",
    O: "X"
  }

  function nextMove(scenery, myMove, attack){
    myMove = attack ? myMove : nextTurn[myMove]

    function checkRow(scenery, row) {
      if ((scenery[row * 3 + 0] == myMove) && (scenery[row * 3 + 1] == myMove) && (scenery[row * 3 + 2] == "")) {
        return row * 3 + 2
      } else if ((scenery[row * 3 + 0] == myMove) && (scenery[row * 3 + 1] == "") && (scenery[row * 3 + 2] == myMove)) {
        return row * 3 + 1
      } else if ((scenery[row * 3 + 0] == "") && (scenery[row * 3 + 1] == myMove) && (scenery[row * 3 + 2] == myMove)) {
        return row * 3 + 0
      } else {
        return -1
      }
    }

    for (var i = 0; i < 3; i++) {
      const move = checkRow(scenery, i)

      if (move != -1) {
        return move
      }
    }

    function checkColumn(scenery, column) {
      if ((scenery[column + 0] == myMove) && (scenery[column + 3] == myMove) && (scenery[column + 6] == "")) {
        return column + 6
      } else if ((scenery[column + 0] == myMove) && (scenery[column + 3] == "") && (scenery[column + 6] == myMove)) {
        return column + 3
      } else if ((scenery[column + 0] == "") && (scenery[column + 3] == myMove) && (scenery[column + 6] == myMove)) {
        return column + 0
      } else {
        return -1
      }
    }

    for (var j = 0; j < 3; j++) {
      const move = checkColumn(scenery, j)

      if (move != -1) {
        return move
      }
    }

    if ((scenery[0] == myMove) && (scenery[4] == myMove) && (scenery[8] == "")) {
      return 8
    } else if ((scenery[0] == myMove) && (scenery[4] == "") && (scenery[8] == myMove)) {
      return 4
    } else if ((scenery[0] == "") && (scenery[4] == myMove) && (scenery[8] == myMove)) {
      return 0
    }

    if ((scenery[2] == myMove) && (scenery[4] == myMove) && (scenery[6] == "")) {
      return 6
    } else if ((scenery[2] == myMove) && (scenery[4] == "") && (scenery[6] == myMove)) {
      return 4
    } else if ((scenery[2] == "") && (scenery[4] == myMove) && (scenery[6] == myMove)) {
      return 2
    }

    return -1
  }

  let moveAttack = nextMove(scenery, myMove, true)
  if (moveAttack != -1) {
    return moveAttack
  }

  let moveDefense = nextMove(scenery, myMove, false)
  if (moveDefense != -1) {
    return moveDefense
  }


  const freeCells = scenery.map((cell, index) => {
    if (cell === "") {
      return index
    } else {
      return -1
    }
  }).filter(index => {
    return index != -1
  })

  const index = freeCells[Math.floor(Math.random() * freeCells.length)]

  return index
}

export default marcosScript