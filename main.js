'use strict';
function setUp() {
  //1-adicionar o evento de click
  //2-colocar a classe bola ou x
  //2.1- adicionei a var clickedCalc = 0 que soma 1 a cada click
  //2.2- se o número da clicked for par, add class ball, se ímpar add claxx x
  //verificar se existe uma linha ou coluna clicada

  var clickedCalc = 0
  var clickButton = null
  var cantClickAnymore = []
 
  var box = Array.from(document.querySelectorAll('.line > button'))
  var reset = document.getElementById('reset')

  var boxFirstLine = Array.from(document.querySelectorAll('.first-line'))
  var boxSecondLine = Array.from(document.querySelectorAll('.second-line'))
  var boxThirdLine = Array.from(document.querySelectorAll('.third-line'))
  var boxFirstColumn = Array.from(document.querySelectorAll('.first-column'))
  var boxSecondColumn = Array.from(document.querySelectorAll('.second-column'))
  var boxThirdColumn = Array.from(document.querySelectorAll('.third-column'))
  var boxDiagonalRightLeft = Array.from(document.querySelectorAll('.diagonal-right-left'))
  var boxDiagonalLeftRight = Array.from(document.querySelectorAll('.diagonal-left-right'))
  var selectGame = document.querySelector("#game")

  var everyLineWithTheClassBird = null 
  var everyLineWithTheClassDino = null 
  var everyColumnWithTheClassBird= null
  var everyColumnWithTheClassDino = null
  var everyDiagonalRightLeftWithTheClassBird = null
  var everyDiagonalRightLeftWithTheClassDino = null
  var everyDiagonalLeftRightWithTheClassBird = null
  var everyDiagonalLeftRightWithTheClassDino = null


  function aditionClassBird (item) {
    item.classList.add('bird')
  }
  function aditionClassDino (item) {
    item.classList.add('dino')
  }
  function aditionWinner (item) {
    item.classList.add('winner')
  }
  function boxHasDino (item) {
    return item.classList.contains('dino')
  }
  function boxHasBird (item) {
    return item.classList.contains('bird')
  }
  function findPosition (item){
    return box.indexOf(item)
  }
  function removeClassBird (item) {
    item.classList.remove('bird')
  }
  function removeClassDino (item) {
    item.classList.remove('dino')
  }
  function removeClassWinner (item) {
    item.classList.remove('winner')
  }
  function removeClassDisabled (item) {
    item.classList.remove('disabled')
  }

  function removeOnGameClassDisabled() {
    selectGame.classList.remove('disabled')
  }


  ////////resetar o jogo
  box.forEach(function(button){
    reset.addEventListener('click', function(){
      removeClassDino(button)
      removeClassBird(button)
      removeClassWinner(button)
      removeClassDisabled(button)
      removeOnGameClassDisabled()
    })
  })
// if(boxHasDino === true || boxHasBird === true) {
  //   return;
  // }

  box.forEach(function(button){

    button.addEventListener('click', function(){

      ///////os  dois jogadores são conforme o par e o ímpar
      if(clickedCalc % 2===0) {
        aditionClassBird(button)
        
      }else if(clickedCalc % 2 !== 0){
        aditionClassDino(button)
        
      }
      clickedCalc ++

      clickButton = this;

      cantClickAnymore.push(clickButton)
      

      // for (var i = 0; i < cantClickAnymore.length; i++) {

      //   if(this.classList.contains('bird')===true){
      //     return
      //     console.log(cantClickAnymore[i], 'kkkkkkkkkkkkkkkkkkkkk')
      //   }
      // }

   


      ////////impossibilitar que mais do que uma linha/col/diag receba winner
      // for (var i = 0; i < box.length; i++) {
      //   if (box[i].classList.contains('winner')) {
      //     return;
      //     clickButton = null;      
      //   }
      // }

      /////LINHA 1
      this.classList.add('disabled')
      if(clickButton.classList.contains('first-line')) {
        everyLineWithTheClassBird = boxFirstLine.every(function (item) {
          return boxHasBird(item)
        })
        if (everyLineWithTheClassBird === true) {
          for (var i = 0; i < boxFirstLine.length; i++) {
            aditionWinner(boxFirstLine[i])
            selectGame.classList.add('disabled')
          }
        }
        everyLineWithTheClassDino = boxFirstLine.every(function (item) {
          return boxHasDino(item)
        })
        if (everyLineWithTheClassDino===true) {
          for (var i = 0; i < boxFirstLine.length; i++) {
            aditionWinner(boxFirstLine[i])
            selectGame.classList.add('disabled')
          }         
        }

      //////LINHA 2
      } else if (clickButton.classList.contains('second-line')) {
        everyLineWithTheClassBird = boxSecondLine.every(function (item) {
          return boxHasBird(item)
        })
        if (everyLineWithTheClassBird===true) {
          for (var i = 0; i < boxSecondLine.length; i++) {
            aditionWinner(boxSecondLine[i])
            selectGame.classList.add('disabled')
          }
        }
        //////jogador 0 ganha na primeira linha
        everyLineWithTheClassDino = boxSecondLine.every(function (item) {
          return boxHasDino(item)
        })
        if (everyLineWithTheClassDino===true) {
          for (var i = 0; i < boxSecondLine.length; i++) {
            aditionWinner(boxSecondLine[i])
            selectGame.classList.add('disabled')
          }
        }


      ////////LINHA 3
      }else if (clickButton.classList.contains('third-line')) {
        everyLineWithTheClassBird = boxThirdLine.every(function (item) {
          return boxHasBird(item)
        })
        if (everyLineWithTheClassBird===true) {
          for (var i = 0; i < boxThirdLine.length; i++) {
            aditionWinner(boxThirdLine[i])
            selectGame.classList.add('disabled')
          } 
        }
        //////jogador 0 ganha na primeira linha
        everyLineWithTheClassDino = boxThirdLine.every(function (item) {
          return boxHasDino(item)
        })
        if (everyLineWithTheClassDino===true) {
          for (var i = 0; i < boxThirdLine.length; i++) {
            aditionWinner(boxThirdLine[i])
            selectGame.classList.add('disabled')
          } 
        }
      } 


      ////////////COLUNA 1
      if (clickButton.classList.contains('first-column'))  {
    
        everyColumnWithTheClassBird = boxFirstColumn.every(function (item) {
          return boxHasBird(item)
        })
        if (everyColumnWithTheClassBird===true) {
          for (var i = 0; i < boxFirstColumn.length; i++) {
            aditionWinner(boxFirstColumn[i])
            selectGame.classList.add('disabled')
          } 
        }
        //////jogador BALL ganha na primeira coluna
        everyColumnWithTheClassDino = boxFirstColumn.every(function (item) {
          return boxHasDino(item)
        })
        if (everyColumnWithTheClassDino===true) {
          for (var i = 0; i < boxFirstColumn.length; i++) {
            aditionWinner(boxFirstColumn[i])
            selectGame.classList.add('disabled')
          }
        }


        //////////////COLUNA 2
      }else if(clickButton.classList.contains('second-column')){
        everyColumnWithTheClassBird = boxSecondColumn.every(function (item) {
          return boxHasBird(item)
        })
        if (everyColumnWithTheClassBird===true) {
          for (var i = 0; i < boxSecondColumn.length; i++) {
            aditionWinner(boxSecondColumn[i])
            selectGame.classList.add('disabled')
          } 
        }
        //////jogador BALL ganha na primeira coluna
        everyColumnWithTheClassDino = boxSecondColumn.every(function (item) {
          return boxHasDino(item)
        })
        if (everyColumnWithTheClassDino===true) {
          for (var i = 0; i < boxSecondColumn.length; i++) {
            aditionWinner(boxSecondColumn[i])
            selectGame.classList.add('disabled')
          }
        }


        ////////////COLUNA 3
      } else if (clickButton.classList.contains('third-column')){
        everyColumnWithTheClassBird = boxThirdColumn.every(function (item) {
          return boxHasBird(item)
        })
        if (everyColumnWithTheClassBird===true) {
          for (var i = 0; i < boxThirdColumn.length; i++) {
            aditionWinner(boxThirdColumn[i])
            selectGame.classList.add('disabled')
          } 
        }
        //////jogador BALL ganha na primeira coluna
        everyColumnWithTheClassDino = boxThirdColumn.every(function (item) {
          return boxHasDino(item)
        })
        if (everyColumnWithTheClassDino===true) {
          for (var i = 0; i < boxThirdColumn.length; i++) {
            aditionWinner(boxThirdColumn[i])
            selectGame.classList.add('disabled')
          }
        }
      }

      //////////////////DIAGONAL RIGHT LEFT
      if (clickButton.classList.contains('diagonal-right-left')) {
        everyDiagonalRightLeftWithTheClassBird = boxDiagonalRightLeft.every(function (item) {
          return boxHasBird(item)
        })
        if (everyDiagonalRightLeftWithTheClassBird===true) {
          for (var i = 0; i < boxDiagonalRightLeft.length; i++) {
            aditionWinner(boxDiagonalRightLeft[i])
            selectGame.classList.add('disabled')
          } 
        }
        //////jogador BALL ganha na primeira coluna
        everyDiagonalRightLeftWithTheClassDino = boxDiagonalRightLeft.every(function (item) {
          return boxHasDino(item)
        })
        if (everyDiagonalRightLeftWithTheClassDino===true) {
          for (var i = 0; i < boxDiagonalRightLeft.length; i++) {
            aditionWinner(boxDiagonalRightLeft[i])
            selectGame.classList.add('disabled')
          }
        }
      }

      ///////////////////DIAGONAL LEFT RIGHT
      if (clickButton.classList.contains('diagonal-left-right')) {
        everyDiagonalLeftRightWithTheClassBird = boxDiagonalLeftRight.every(function (item) {
          return boxHasBird(item)
        })
        if (everyDiagonalLeftRightWithTheClassBird===true) {
         for (var i = 0; i < boxDiagonalLeftRight.length; i++) {
            aditionWinner(boxDiagonalLeftRight[i])
            selectGame.classList.add('disabled')
          } 
        }
        //////jogador BALL ganha na primeira coluna
        everyDiagonalLeftRightWithTheClassDino = boxDiagonalLeftRight.every(function (item) {
          return boxHasDino(item)
        })
        if (everyDiagonalLeftRightWithTheClassDino===true) {
         for (var i = 0; i < boxDiagonalLeftRight.length; i++) {
            aditionWinner(boxDiagonalLeftRight[i])
            selectGame.classList.add('disabled')
          }
        }
      }
    })


  })
}

window.onload = setUp;