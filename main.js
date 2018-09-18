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
  var listaLinha1 = []

  var box = Array.from(document.querySelectorAll('button'))

 


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
      if(findPosition(button)<=line1) {
        listaLinha1.push(this)
        var everyLineWithTheClassX = listaLinha1.every(function (item) {
          return boxHasX
        })
        
        var han= everyLineWithTheClassX
        console.log(han)  
      } else if (findPosition(button) <= line2) {
        console.log('olá')
      }else {
        console.log('alo')
      }
    })
    console.log(box.indexOf(button))
  })
}

window.onload = setUp;