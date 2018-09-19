'use strict';
function setUp() {
  //1-adicionar o evento de click
  //2-colocar a classe bola ou x
  //2.1- adicionei a var clicked = 0 que soma 1 a cada click
  //2.2- se o número da clicked for par, add class ball, se ímpar add claxx x
  //verificar se existe uma linha ou coluna clicada

  var clicked = 0
  var line1 = 2
  var line2 = 5
  var line3 = 8
  var column1 = [0, 3, 6]
  console.log(column1[0], column1[1], column1[2])


  var box = Array.from(document.querySelectorAll('button'))

  var boxFirstLine = Array.from(document.querySelectorAll('.first-line'))
  var boxSecondLine = Array.from(document.querySelectorAll('.second-line'))
  var boxThirdLine = Array.from(document.querySelectorAll('.third-line'))
  var boxFirstColumn = Array.from(document.querySelectorAll('.first-column'))
  var boxSecondColumn = Array.from(document.querySelectorAll('.second-column'))
  var boxThirdColumn = Array.from(document.querySelectorAll('.third-column'))

console.log(boxFirstColumn)
  function aditionClassx (item) {
    item.classList.add('x')
  }
  function aditionClassBall (item) {
    item.classList.add('ball')
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

      clicked++
      if(clicked%2===0) {
        aditionClassx(button)
      }else{
        aditionClassBall(button)
      }


      /////LINHA 1
      if(findPosition(button) <= line1) {
  
        /////jogador x ganha na primeira linha
        var everyLineWithTheClassX = boxFirstLine.every(function (item) {
          return boxHasX(item)
        })
        if (everyLineWithTheClassX===true) {
          console.log('parabéns x')
        }
        //////jogador 0 ganha na primeira linha
        var everyLineWithTheClassBall = boxFirstLine.every(function (item) {
          return boxHasBall(item)
        })
        if (everyLineWithTheClassBall===true) {
          console.log('parabéns ball')
        }


      //////LINHA 2
      } else if (findPosition(button) <= line2) {
        var everyLineWithTheClassX = boxSecondLine.every(function (item) {
          return boxHasX(item)
        })
        if (everyLineWithTheClassX===true) {
          console.log('parabéns x')
        }
        //////jogador 0 ganha na primeira linha
        var everyLineWithTheClassBall = boxSecondLine.every(function (item) {
          return boxHasBall(item)
        })
        if (everyLineWithTheClassBall===true) {
          console.log('parabéns ball')
        }


      ////////LINHA 3
      }else if (findPosition(button) <= line3) {
         var everyLineWithTheClassX = boxThirdLine.every(function (item) {
          return boxHasX(item)
        })
        if (everyLineWithTheClassX===true) {
          console.log('parabéns x')
        }
        //////jogador 0 ganha na primeira linha
        var everyLineWithTheClassBall = boxThirdLine.every(function (item) {
          return boxHasBall(item)
        })
        if (everyLineWithTheClassBall===true) {
          console.log('parabéns ball')
        }



      ////////////COLUNA 1
      } else if (findPosition(button) = column1)  {
        console.log('oooooooooooooo')
         var everyLineWithTheClassX = boxFirstColumn.every(function (item) {
          return boxHasX(item)
        })
        if (everyLineWithTheClassX===true) {
          console.log('parabéns x')
        }
        //////jogador BALL ganha na primeira coluna
        var everyLineWithTheClassBall = boxFirstColumn.every(function (item) {
          return boxHasBall(item)
        })
        if (everyLineWithTheClassBall===true) {
          console.log('parabéns ball')
        }

      }else {

      }
    })
    console.log(box.indexOf(button))
  })
}

window.onload = setUp;