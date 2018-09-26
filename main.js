'use strict';
function setUp() {
  /////criar variáveis e funções globais


  var clickedCalc = 0
  var clickButton = null
  var newBox =[]
  var erro = 0
 
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

  // var targetBox= box[Math.floor(Math.random() * box.length)];


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
  // function boxWithoutDino (item) {
  //   return !item.classList.contains('dino')
  // }
  // function boxWhithoutBird (item) {
  //   return !item.classList.contains('bird')
  // }
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
  function addOnGameClassDisabled() {
    selectGame.classList.add('disabled')
  }

  function chooseOtherBox(){
     box[Math.floor(Math.random() * box.length)];
  }

  function indexButton(item){
     return box.indexOf(item)
  }

    
  ////////resetar o jogo
  ////retirar classe Dino, Bird, Winner, Disabled de cada click e disabled após terminar o jogo

  reset.addEventListener('click', function () {
    box.forEach(function (button) {
      removeClassDino(button)
      removeClassBird(button)
      removeClassWinner(button)
      removeClassDisabled(button)
    })
    removeOnGameClassDisabled()
  })

  ///adicionar função de click

  box.forEach(function(button){

    button.addEventListener('click', function(){

      //jogador adiciona a classe Bird
      aditionClassBird(button)
      //logo depois o código escolhe um randomico para adicionar a classe Dino
      var otherBox= box[Math.floor(Math.random() * box.length)];
      //retirar do box os elementos que já foram clicados
      box.splice(indexButton(button), 1)
      //se o box não tiver a classe dino ou bird, pode adicionar a classe dino
      if(boxHasBird(otherBox)=== false|| boxHasDino(otherBox)===false){
        aditionClassDino(otherBox)   
      //retirar do box os elementos com dino 
        box.splice(indexButton(otherBox), 1)
      //////////dúvida!!!!!a clase que eu clico não pode receber a classe dino e a bird
      }else if(otherBox===this){
        while(otherBox===this){
          return chooseOtherBox()
        }
        aditionClassDino(otherBox)
      }

      clickedCalc ++

      clickButton = this;

      /////adicionar disabled para cada botão clicado e não permitir que seja clicado mais de uma vez
      this.classList.add('disabled')
      /////LINHA 1 conferir se ela inteira contém a mesma classe
      if(clickButton.classList.contains('first-line')) {
        everyLineWithTheClassBird = boxFirstLine.every(function (item) {
          return boxHasBird(item)
        })
        if (everyLineWithTheClassBird === true) {
          for (var i = 0; i < boxFirstLine.length; i++) {
            aditionWinner(boxFirstLine[i])
          }
          addOnGameClassDisabled()
        }
        everyLineWithTheClassDino = boxFirstLine.every(function (item) {
          return boxHasDino(item)
        })
        if (everyLineWithTheClassDino===true) {
          for (var i = 0; i < boxFirstLine.length; i++) {
            aditionWinner(boxFirstLine[i])
          }
          addOnGameClassDisabled()       
        }

      //////LINHA 2
      } else if (clickButton.classList.contains('second-line')) {
        everyLineWithTheClassBird = boxSecondLine.every(function (item) {
          return boxHasBird(item)
        })
        if (everyLineWithTheClassBird===true) {
          for (var i = 0; i < boxSecondLine.length; i++) {
            aditionWinner(boxSecondLine[i])
          }
          addOnGameClassDisabled()
        }
        everyLineWithTheClassDino = boxSecondLine.every(function (item) {
          return boxHasDino(item)
        })
        if (everyLineWithTheClassDino===true) {
          for (var i = 0; i < boxSecondLine.length; i++) {
            aditionWinner(boxSecondLine[i])
          }
          addOnGameClassDisabled()
        }


      ////////LINHA 3
      }else if (clickButton.classList.contains('third-line')) {
        everyLineWithTheClassBird = boxThirdLine.every(function (item) {
          return boxHasBird(item)
        })
        if (everyLineWithTheClassBird===true) {
          for (var i = 0; i < boxThirdLine.length; i++) {
            aditionWinner(boxThirdLine[i])
          } 
          addOnGameClassDisabled()
        }
        everyLineWithTheClassDino = boxThirdLine.every(function (item) {
          return boxHasDino(item)
        })
        if (everyLineWithTheClassDino===true) {
          for (var i = 0; i < boxThirdLine.length; i++) {
            aditionWinner(boxThirdLine[i])
          }
          addOnGameClassDisabled()
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
          }
          addOnGameClassDisabled()
        }
        everyColumnWithTheClassDino = boxFirstColumn.every(function (item) {
          return boxHasDino(item)
        })
        if (everyColumnWithTheClassDino===true) {
          for (var i = 0; i < boxFirstColumn.length; i++) {
            aditionWinner(boxFirstColumn[i])
          }
          addOnGameClassDisabled()
        }


        //////////////COLUNA 2
      }else if(clickButton.classList.contains('second-column')){
        everyColumnWithTheClassBird = boxSecondColumn.every(function (item) {
          return boxHasBird(item)
        })
        if (everyColumnWithTheClassBird===true) {
          for (var i = 0; i < boxSecondColumn.length; i++) {
            aditionWinner(boxSecondColumn[i])
          } 
          addOnGameClassDisabled()
        }
        everyColumnWithTheClassDino = boxSecondColumn.every(function (item) {
          return boxHasDino(item)
        })
        if (everyColumnWithTheClassDino===true) {
          for (var i = 0; i < boxSecondColumn.length; i++) {
            aditionWinner(boxSecondColumn[i])
          }
          addOnGameClassDisabled()
        }


        ////////////COLUNA 3
      } else if (clickButton.classList.contains('third-column')){
        everyColumnWithTheClassBird = boxThirdColumn.every(function (item) {
          return boxHasBird(item)
        })
        if (everyColumnWithTheClassBird===true) {
          for (var i = 0; i < boxThirdColumn.length; i++) {
            aditionWinner(boxThirdColumn[i])
          }
          addOnGameClassDisabled()
        }
        everyColumnWithTheClassDino = boxThirdColumn.every(function (item) {
          return boxHasDino(item)
        })
        if (everyColumnWithTheClassDino===true) {
          for (var i = 0; i < boxThirdColumn.length; i++) {
            aditionWinner(boxThirdColumn[i])
          }
          addOnGameClassDisabled()
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
          }
          addOnGameClassDisabled()
        }
        everyDiagonalRightLeftWithTheClassDino = boxDiagonalRightLeft.every(function (item) {
          return boxHasDino(item)
        })
        if (everyDiagonalRightLeftWithTheClassDino===true) {
          for (var i = 0; i < boxDiagonalRightLeft.length; i++) {
            aditionWinner(boxDiagonalRightLeft[i])
          }
          addOnGameClassDisabled()
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
          }
          addOnGameClassDisabled()
        }
        everyDiagonalLeftRightWithTheClassDino = boxDiagonalLeftRight.every(function (item) {
          return boxHasDino(item)
        })
        if (everyDiagonalLeftRightWithTheClassDino===true) {
         for (var i = 0; i < boxDiagonalLeftRight.length; i++) {
            aditionWinner(boxDiagonalLeftRight[i])
          }
          addOnGameClassDisabled()
        }
      }
    })
  })
}

window.onload = setUp;