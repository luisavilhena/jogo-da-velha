'use strict';
function setUp() {
  //1-adicionar o evento de click
  //2-colocar a classe bola ou x
  //2.1- adicionei a var clickedCalc = 0 que soma 1 a cada click
  //2.2- se o número da clicked for par, add class ball, se ímpar add claxx x
  //verificar se existe uma linha ou coluna clicada

  var clickedCalc = 0
  var clickButton = null
  var line1 = 2
  var line2 = 5
  var line3 = 8
  var column1 = [0, 3, 6]



  var box = Array.from(document.querySelectorAll('button'))



  var boxFirstLine = Array.from(document.querySelectorAll('.first-line'))
  var boxSecondLine = Array.from(document.querySelectorAll('.second-line'))
  var boxThirdLine = Array.from(document.querySelectorAll('.third-line'))
  var boxFirstColumn = Array.from(document.querySelectorAll('.first-column'))
  var boxSecondColumn = Array.from(document.querySelectorAll('.second-column'))
  var boxThirdColumn = Array.from(document.querySelectorAll('.third-column'))
  var boxDiagonalRightLeft = Array.from(document.querySelectorAll('.diagonal-right-left'))
  var boxDiagonalLeftRight = Array.from(document.querySelectorAll('.diagonal-left-right'))
  console.log(boxFirstColumn)

  function aditionClassx (item) {
    item.classList.add('x')
  }
  function aditionClassBall (item) {
    item.classList.add('ball')
  }
  function aditionWinner (item) {
    item.classList.add('winner')
  }
  function boxHasBall (item) {
    return item.classList.contains('ball')
  }
  function boxHasX (item) {
    return item.classList.contains('x')
  }
  function findPosition (item){
    return box.indexOf(item)
  }


  box.forEach(function(button){

    button.addEventListener('click', function(){
      ///os  dois jogadores são conforme o par e o ímpar
      clickedCalc ++
      if(clickedCalc % 2===0) {
        aditionClassx(button)
      }else{
        aditionClassBall(button)
      }
      clickButton = this;

      /////LINHA 1

      if(clickButton.classList.contains('first-line')) {
        var everyLineWithTheClassX = boxFirstLine.every(function (item) {
          return boxHasX(item)
        })
        if (everyLineWithTheClassX===true) {
          aditionWinner(button)
        }
        var everyLineWithTheClassBall = boxFirstLine.every(function (item) {
          return boxHasBall(item)
        })
        if (everyLineWithTheClassBall===true) {
          boxFirstLine.forEach(aditionWinner(button))
        }


      //////LINHA 2
      } else if (clickButton.classList.contains('second-line')) {
        var everyLineWithTheClassX = boxSecondLine.every(function (item) {
          return boxHasX(item)
        })
        if (everyLineWithTheClassX===true) {
          aditionWinner(button) 
        }
        //////jogador 0 ganha na primeira linha
        var everyLineWithTheClassBall = boxSecondLine.every(function (item) {
          return boxHasBall(item)
        })
        if (everyLineWithTheClassBall===true) {
          aditionWinner(button) 
        }


      ////////LINHA 3
      }else if (clickButton.classList.contains('third-line')) {
         var everyLineWithTheClassX = boxThirdLine.every(function (item) {
          return boxHasX(item)
        })
        if (everyLineWithTheClassX===true) {
          aditionWinner(button) 
        }
        //////jogador 0 ganha na primeira linha
        var everyLineWithTheClassBall = boxThirdLine.every(function (item) {
          return boxHasBall(item)
        })
        if (everyLineWithTheClassBall===true) {
          aditionWinner(button) 
        }
      } 


      ////////////COLUNA 1
      if (clickButton.classList.contains('first-column'))  {
    
        var everyColumnWithTheClassX = boxFirstColumn.every(function (item) {
          return boxHasX(item)
        })
        if (everyColumnWithTheClassX===true) {
          aditionWinner(button) 
        }
        //////jogador BALL ganha na primeira coluna
        var everyColumnWithTheClassBall = boxFirstColumn.every(function (item) {
          return boxHasBall(item)
        })
        if (everyColumnWithTheClassBall===true) {
          aditionWinner(button)
        }


        //////////////COLUNA 2
      }else if(clickButton.classList.contains('second-column')){
        var everyColumnWithTheClassX = boxSecondColumn.every(function (item) {
          return boxHasX(item)
        })
        if (everyColumnWithTheClassX===true) {
          aditionWinner(button) 
        }
        //////jogador BALL ganha na primeira coluna
        var everyColumnWithTheClassBall = boxSecondColumn.every(function (item) {
          return boxHasBall(item)
        })
        if (everyColumnWithTheClassBall===true) {
          aditionWinner(button)
        }


        ////////////COLUNA 3
      } else if (clickButton.classList.contains('third-column')){
        var everyColumnWithTheClassX = boxThirdColumn.every(function (item) {
          return boxHasX(item)
        })
        if (everyColumnWithTheClassX===true) {
          aditionWinner(button) 
        }
        //////jogador BALL ganha na primeira coluna
        var everyColumnWithTheClassBall = boxThirdColumn.every(function (item) {
          return boxHasBall(item)
        })
        if (everyColumnWithTheClassBall===true) {
          aditionWinner(button)
        }
      }

      //////////////////DIAGONAL RIGHT LEFT
      if (clickButton.classList.contains('diagonal-right-left')) {
        var everyDiagonalRightLeftWithTheClassX = boxDiagonalRightLeft.every(function (item) {
          return boxHasX(item)
        })
        if (everyDiagonalRightLeftWithTheClassX===true) {
          aditionWinner(button) 
        }
        //////jogador BALL ganha na primeira coluna
        var everyDiagonalRightLeftWithTheClassBall = boxDiagonalRightLeft.every(function (item) {
          return boxHasBall(item)
        })
        if (everyDiagonalRightLeftWithTheClassBall===true) {
          aditionWinner(button)
        }
      }

      ///////////////////DIAGONAL LEFT RIGHT
      if (clickButton.classList.contains('diagonal-left-right')) {
        var everyDiagonalLeftRightWithTheClassX = boxDiagonalLeftRight.every(function (item) {
          return boxHasX(item)
        })
        if (everyDiagonalLeftRightWithTheClassX===true) {
          aditionWinner(button) 
        }
        //////jogador BALL ganha na primeira coluna
        var everyDiagonalLeftRightWithTheClassBall = boxDiagonalLeftRight.every(function (item) {
          return boxHasBall(item)
        })
        if (everyDiagonalLeftRightWithTheClassBall===true) {
          aditionWinner(button)
        }
      }
      
    })

  })
}

window.onload = setUp;