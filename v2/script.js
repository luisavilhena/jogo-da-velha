function setup() {
  /**
   * @param  {Array} line List of values in the line to be checked
   * @param  {Number} targetValue The target targetValue (0, 1, 2)
   * @return {Boolean} Whether the values of the line correspond to the given targetValue
   */
  function checkLine(line, targetValue) {
    return line.every(function (value) {
      return value === targetValue
    })
  }

  function getRow(boardRows, rowIndex) {
    return boardRows[rowIndex]
  }

  function getColumn(boardRows, columnIndex) {
    return boardRows.map(function (row) {
      return row[columnIndex]
    })
  }

  function getAscendingDiagonal(boardRows) {
    return boardRows.map(function (row, rowIndex) {
      return row[rowIndex]
    })
  }

  function getDescendingDiagonal(boardRows) {
    return boardRows.map(function (row, rowIndex) {
      var lastLineIndex = row.length - 1
      var columnIndex = lastLineIndex - rowIndex

      return row[columnIndex]
    })
  }

  function checkRow(boardRows, rowIndex, player) {
    // Get the row
    var row = getRow(boardRows, rowIndex)

    return checkLine(row, player)
  }

  function checkColumn(boardRows, columnIndex, player) {
    // Get the column
    var column = getColumn(boardRows, columnIndex)

    return checkLine(column, player)
  }

  function checkAscendingDiagonal(boardRows, player) {
    // Get the diagonal
    var diagonal = getAscendingDiagonal(boardRows)

    return checkLine(diagonal, player)
  }

  function checkDescendingDiagonal(boardRows, player) {
    // Get the diagonal
    var diagonal = getDescendingDiagonal(boardRows)

    return checkLine(diagonal, player)
  }

  function checkPlayer(boardRows, player) {
    // For each row, check if the player won the row
    // For each column, check if the player won the column
    // For each diagonal, check if the player won the diagona
    var playerWonAnyRow = false

    boardRows.forEach(function (row, rowIndex) {
      if (!playerWonAnyRow) {
        playerWonAnyRow = checkRow(boardRows, rowIndex, player)
      }
    })

    if (playerWonAnyRow) {
      return true
    }

    var playerWonAnyColumn = false

    boardRows[0].forEach(function (value, columnIndex) {
      if (!playerWonAnyColumn) {
        playerWonAnyColumn = checkColumn(boardRows, columnIndex, player)
      }
    })

    if (playerWonAnyColumn) {
      return true
    }

    if (checkAscendingDiagonal(boardRows, player)) {
      return true
    }

    if (checkDescendingDiagonal(boardRows, player)) {
      return true
    }

    return false
  }




  ////////

  var boardRows = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
  var activePlayer = 1
  var winnerPlayer = false

  var gameElement = document.getElementById('game')

  function changePlayer() {
    if (activePlayer === 1) {
      activePlayer = 2
    } else {
      activePlayer = 1
    }
  }

  function renderBoard() {
    gameElement.innerHTML = ''

    boardRows.forEach(function (row, rowIndex) {
      var rowElement = document.createElement('div')
      rowElement.classList.add('row')

      row.forEach(function (value, columnIndex) {
        var valueElement = document.createElement('div')
        valueElement.classList.add('value')
        valueElement.innerHTML = value

        // Store the row and column data into the valueElement
        valueElement.setAttribute('data-row', rowIndex)
        valueElement.setAttribute('data-column', columnIndex)

        rowElement.appendChild(valueElement)
      })

      gameElement.appendChild(rowElement)
    })
  }

  function resetGame() {
    boardRows = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
    activePlayer = 1
    winnerPlayer = false

    renderBoard()
  }

  gameElement.addEventListener('click', function (event) {
    if (winnerPlayer) {
      resetGame()
      return
    }

    var target = event.target

    var targetRow = parseInt(target.getAttribute('data-row'))
    var targetColumn = parseInt(target.getAttribute('data-column'))

    // Modify the board
    boardRows[targetRow][targetColumn] = activePlayer

    renderBoard()

    // Verify if the activePlayer has won
    var playerWon = checkPlayer(boardRows, activePlayer)

    if (playerWon) {
      winnerPlayer = activePlayer
      alert('Winner ' + activePlayer)
    } else {
      changePlayer()
    }
  })

  // first render
  renderBoard()


}

window.addEventListener('load', setup)
