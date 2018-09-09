var playBongo = function(squareNum) {
  if (squareNum === "0"){
    var audio = document.getElementById('bongo1');
    audio.currentTime = 0;
    audio.play(); 
  }
  if (squareNum === "1") {
    var audio = document.getElementById('bongo2');
    audio.currentTime = 0;
    audio.play();
  }
  if (squareNum === "2") {
    var audio = document.getElementById('bongo3');
    audio.currentTime = 0;
    audio.play(); 
    
  }
  if (squareNum === "3") {
    var audio = document.getElementById('bongo4');
    audio.currentTime = 0;
    audio.play();
  }
  if(squareNum === "4") {
    var audio = document.getElementById('bongo5');
    audio.currentTime = 0;
    audio.play(); 
  }


}
$(document).ready(function () {

  document.addEventListener('keydown', function (event) {
    if (event.which == 49) {
      var audio = document.getElementById('bongo1')
      audio.currentTime = 0;
      audio.play();
      var borderElement = document.getElementById('0');
      borderElement.style.border = "3px solid black";
    }
    if (event.which == 50) {

      var audio = document.getElementById('bongo2')
      audio.currentTime = 0;
      audio.play();
      var borderElement = document.getElementById('1');
      borderElement.style.border = "3px solid black";
      
    }
    if (event.which == 51) {

      var audio = document.getElementById('bongo3')
      audio.currentTime = 0;
      audio.play();
      var borderElement = document.getElementById('2');
      borderElement.style.border = "3px solid black";
    }
    if (event.which == 52) {

      var audio = document.getElementById('bongo4')
      audio.currentTime = 0;
      audio.play();
      var borderElement = document.getElementById('3');
      borderElement.style.border = "3px solid black";
    }
    if (event.which == 53) {

      var audio = document.getElementById('bongo5')
      audio.currentTime = 0;
      audio.play();
      var borderElement = document.getElementById('4');
      borderElement.style.border = "3px solid black";
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.which == 49) {
      var borderElement = document.getElementById('0');
      borderElement.style.border = "3px solid white";
    }
    if (event.which == 50) {
      var borderElement = document.getElementById('1');
      borderElement.style.border = "3px solid white";
    }
    if (event.which == 51) {
      var borderElement = document.getElementById('2');
      borderElement.style.border = "3px solid white";
    }
    if (event.which == 52) {
      var borderElement = document.getElementById('3');
      borderElement.style.border = "3px solid white";
    }
    if (event.which == 53) {
      var borderElement = document.getElementById('4');
      
      borderElement.style.border = "3px solid white";
    }
  });
  $(".game-square").click(function () {
    var squareId = $(this).attr('id');
    playBongo(squareId);
  });
});
