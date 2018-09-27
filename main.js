'use strict';
function setUp() {

  ////problema: preciso criar uma forma que depois que receber a classe winner
  /////não adicione mais a classe dino 
  /////criar variáveis e funções globais


  var clickedCalc = 0
  var clickButton = null
  var newBox =[]
  var erro = 0
 
  var box = Array.from(document.querySelectorAll('.line > button'))
  var box2 = Array.from(document.querySelectorAll('.line > button'))
  // var box3 = box.map(function(){
  //   return box
  // })
 
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
  function boxHasWinner(item) {
    return item.classList.contains('winner')
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
  function indexButton(item){
     return box.indexOf(item)
  }

    
  ////////resetar o jogo
  ////retirar classe Dino, Bird, Winner, Disabled de cada click e disabled após terminar o jogo

  reset.addEventListener('click', function () {
    box2.forEach(function (button) {
      removeClassDino(button)
      removeClassBird(button)
      removeClassWinner(button)
      removeClassDisabled(button)
      console.log(removeClassDisabled(button))
      return box.push(button)

    })
    removeOnGameClassDisabled()
  })

  ///adicionar função de click

  box.forEach(function(button){

    button.addEventListener('click', function(){
      //se restar apenas 1 item na box, adicione apenas a classe bird
      if(box.length <= 1) {
        aditionClassBird(button)
        return
      }
      //Computador é o segundo jogador
      //jogador adiciona a classe Bird
      aditionClassBird(button)
      //  // o código escolhe um randomico para adicionar a classe Dino
      var otherBox= box[Math.floor(Math.random() * box.length)];

      

      //quando alguém tiver a classe winner retornar e não fazer mais nada
      // if(boxHasWinner(button) === true){
      //   return otherBox.classList.remove('dino')
      //   console.log('situação1')
      // }
      // if(boxHasWinner(otherBox) === true){
      //   return button.classList.remove('bird')
      //   console.log('situação2')
      // }
     
      //retirar do box os elementos que já foram clicados com classe bird
      box.splice(indexButton(button), 1)
      //se o box não tiver a classe dino ou bird, pode adicionar a classe dino

      if(boxHasBird(otherBox)===false|| boxHasDino(otherBox)===false){
        //não receber no mesmo button as duas classes
        if (otherBox ===  this) {        
          //escolher outro box 
          var chooseOtherBox = box[Math.floor(Math.random() * box.length)];

          //adicionar a classe dino no outro box
          aditionClassDino(chooseOtherBox)
          //se passar pela situação de ser o mesmo e tiver um ganhador, não faça
          //quando alguém tiver a classe winner retornar e não fazer mais nada
          // if(boxHasWinner(button) === true){
          //   return chooseOtherBox.classList.remove('dino')
          //   console.log('situação3')
          // }
          // if(boxHasWinner(chooseOtherBox) === true){
          //   return button.classList.remove('bird')
          //   console.log('situação4')
          // }

          //tirar o box com dino
          box.splice(indexButton(chooseOtherBox), 1)
          return
        }
        //quando alguém tiver a classe winner retornar e não fazer mais nada
        //retirar o otherbox do box
        box.splice(indexButton(otherBox), 1)
        //colocar a classe dino no box
        aditionClassDino(otherBox)
        // if(boxHasWinner(button) === true){
        //   return otherBox.classList.remove('dino')
        //   console.log('situação5')
        // }
        // if(boxHasWinner(otherBox) === true){
        //   return button.classList.remove('bird')
        //   console.log('situação6')
        // } 
        
      }
    




      clickButton = this;

      /////adicionar disabled para cada botão clicado e não permitir que seja clicado mais de uma vez
      this.classList.add('disabled')
      otherBox.classList.add('disabled')
      /////LINHA 1 conferir se ela inteira contém a mesma classe
      if(clickButton.classList.contains('first-line') || otherBox.classList.contains('first-line')) {
        everyLineWithTheClassBird = boxFirstLine.every(function (item) {
          return boxHasBird(item)
        })
        if (everyLineWithTheClassBird ) {
          for (var i = 0; i < boxFirstLine.length; i++) {
            aditionWinner(boxFirstLine[i])
          }
          addOnGameClassDisabled()
        }
        everyLineWithTheClassDino = boxFirstLine.every(function (item) {
          return boxHasDino(item)
        })
        if (everyLineWithTheClassDino) {
          for (var i = 0; i < boxFirstLine.length; i++) {
            aditionWinner(boxFirstLine[i])
          }
          addOnGameClassDisabled()       
        }

      //////LINHA 2
      } 
      if (clickButton.classList.contains('second-line') || otherBox.classList.contains('second-line')) {
        everyLineWithTheClassBird = boxSecondLine.every(function (item) {
          return boxHasBird(item)
        })
        if (everyLineWithTheClassBird) {
          for (var i = 0; i < boxSecondLine.length; i++) {
            aditionWinner(boxSecondLine[i])
          }
          addOnGameClassDisabled()
        }
        everyLineWithTheClassDino = boxSecondLine.every(function (item) {
          return boxHasDino(item)
        })
        if (everyLineWithTheClassDino) {
          for (var i = 0; i < boxSecondLine.length; i++) {
            aditionWinner(boxSecondLine[i])
          }
          addOnGameClassDisabled()
        }
      }
      ////////LINHA 3
      if (clickButton.classList.contains('third-line') || otherBox.classList.contains('third-line')) {
        everyLineWithTheClassBird = boxThirdLine.every(function (item) {
          return boxHasBird(item)
        })
        if (everyLineWithTheClassBird) {
          for (var i = 0; i < boxThirdLine.length; i++) {
            aditionWinner(boxThirdLine[i])
          } 
          addOnGameClassDisabled()
        }
        everyLineWithTheClassDino = boxThirdLine.every(function (item) {
          return boxHasDino(item)
        })
        if (everyLineWithTheClassDino) {
          for (var i = 0; i < boxThirdLine.length; i++) {
            aditionWinner(boxThirdLine[i])
          }
          addOnGameClassDisabled()
        }
      } 


      ////////////COLUNA 1
      if (clickButton.classList.contains('first-column')|| otherBox.classList.contains('first-column'))  {
    
        everyColumnWithTheClassBird = boxFirstColumn.every(function (item) {
          return boxHasBird(item)
        })
        if (everyColumnWithTheClassBird) {
          for (var i = 0; i < boxFirstColumn.length; i++) {
            aditionWinner(boxFirstColumn[i])
          }
          addOnGameClassDisabled()
        }
        everyColumnWithTheClassDino = boxFirstColumn.every(function (item) {
          return boxHasDino(item)
        })
        if (everyColumnWithTheClassDino) {
          for (var i = 0; i < boxFirstColumn.length; i++) {
            aditionWinner(boxFirstColumn[i])
          }
          addOnGameClassDisabled()
        }


        //////////////COLUNA 2
      }
      if(clickButton.classList.contains('second-column') || otherBox.classList.contains('second-column')){
        everyColumnWithTheClassBird = boxSecondColumn.every(function (item) {
          return boxHasBird(item)
        })
        if (everyColumnWithTheClassBird) {
          for (var i = 0; i < boxSecondColumn.length; i++) {
            aditionWinner(boxSecondColumn[i])
          } 
          addOnGameClassDisabled()
        }
        everyColumnWithTheClassDino = boxSecondColumn.every(function (item) {
          return boxHasDino(item)
        })
        if (everyColumnWithTheClassDino) {
          for (var i = 0; i < boxSecondColumn.length; i++) {
            aditionWinner(boxSecondColumn[i])
          }
          addOnGameClassDisabled()
        }


        ////////////COLUNA 3
      }
      if (clickButton.classList.contains('third-column') || otherBox.classList.contains('third-column')){
        everyColumnWithTheClassBird = boxThirdColumn.every(function (item) {
          return boxHasBird(item)
        })
        if (everyColumnWithTheClassBird) {
          for (var i = 0; i < boxThirdColumn.length; i++) {
            aditionWinner(boxThirdColumn[i])
          }
          addOnGameClassDisabled()
        }
        everyColumnWithTheClassDino = boxThirdColumn.every(function (item) {
          return boxHasDino(item)
        })
        if (everyColumnWithTheClassDino) {
          for (var i = 0; i < boxThirdColumn.length; i++) {
            aditionWinner(boxThirdColumn[i])
          }
          addOnGameClassDisabled()
        }
      }

      //////////////////DIAGONAL RIGHT LEFT
      if (clickButton.classList.contains('diagonal-right-left') || otherBox.classList.contains('diagonal-right-left')) {
        everyDiagonalRightLeftWithTheClassBird = boxDiagonalRightLeft.every(function (item) {
          return boxHasBird(item)
        })
        if (everyDiagonalRightLeftWithTheClassBird) {
          for (var i = 0; i < boxDiagonalRightLeft.length; i++) {
            aditionWinner(boxDiagonalRightLeft[i])
          }
          addOnGameClassDisabled()
        }
        everyDiagonalRightLeftWithTheClassDino = boxDiagonalRightLeft.every(function (item) {
          return boxHasDino(item)
        })
        if (everyDiagonalRightLeftWithTheClassDino) {
          for (var i = 0; i < boxDiagonalRightLeft.length; i++) {
            aditionWinner(boxDiagonalRightLeft[i])
          }
          addOnGameClassDisabled()
        }
      }

      ///////////////////DIAGONAL LEFT RIGHT
      if (clickButton.classList.contains('diagonal-left-right') || otherBox.classList.contains('diagonal-left-right')) {
        everyDiagonalLeftRightWithTheClassBird = boxDiagonalLeftRight.every(function (item) {
          return boxHasBird(item)
        })
        if (everyDiagonalLeftRightWithTheClassBird) {
         for (var i = 0; i < boxDiagonalLeftRight.length; i++) {
            aditionWinner(boxDiagonalLeftRight[i])
          }
          addOnGameClassDisabled()
        }
        everyDiagonalLeftRightWithTheClassDino = boxDiagonalLeftRight.every(function (item) {
          return boxHasDino(item)
        })
        if (everyDiagonalLeftRightWithTheClassDino) {
         for (var i = 0; i < boxDiagonalLeftRight.length; i++) {
            aditionWinner(boxDiagonalLeftRight[i])
          }
          addOnGameClassDisabled()
        }
      }


      if(boxHasBird(otherBox)===false|| boxHasDino(otherBox)===false){
        //não receber no mesmo button as duas classes
        if (otherBox ===  this) {        
          //escolher outro box 
          var chooseOtherBox = box[Math.floor(Math.random() * box.length)];

          //adicionar a classe dino no outro box
          aditionClassDino(chooseOtherBox)
          //se passar pela situação de ser o mesmo e tiver um ganhador, não faça
          //quando alguém tiver a classe winner retornar e não fazer mais nada
          // if(boxHasWinner(button) === true){
          //   return chooseOtherBox.classList.remove('dino')
          //   console.log('situação3')
          // }
          // if(boxHasWinner(chooseOtherBox) === true){
          //   return button.classList.remove('bird')
          //   console.log('situação4')
          // }
          if(boxHasWinner(button)){
            chooseOtherBox.classList.remove('bird')
          }

          //tirar o box com dino
          box.splice(indexButton(chooseOtherBox), 1)
          return
        }
        //quando alguém tiver a classe winner retornar e não fazer mais nada
        //retirar o otherbox do box
        box.splice(indexButton(otherBox), 1)
        //colocar a classe dino no box
        aditionClassDino(otherBox)
        if(boxHasWinner(button)){
          otherBox.classList.remove('bird')
        }
        // if(boxHasWinner(button) === true){
        //   return otherBox.classList.remove('dino')
        //   console.log('situação5')
        // }
        // if(boxHasWinner(otherBox) === true){
        //   return button.classList.remove('bird')
        //   console.log('situação6')
        // } 
        
      }
    })
  })
}

window.onload = setUp;