'use strict';
function setUp() {

  var line = 1

  var box = Array.from(document.querySelectorAll('.line > button'))

  function classL1 (item){
    return item.classList.contains('l'+ line)
  }


  box.forEach(function(button){
    button.addEventListener('click', function(){

      if(classL1(button) === true){
        console.log(classL1(button), 'oooooooooooo')      
      }
    })
  })






}
window.onload = setUp;
