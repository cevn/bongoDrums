$(document).ready(function () {

  document.addEventListener('keydown', function (event) {
    if (event.which == 49) {
      var audio = document.getElementById('bongo1');
      audio.currentTime = 0;
      audio.play();
      var borderElement = document.getElementById('0');
      borderElement.style.border = "3px solid black";
      borderElement.style.color = "black";
    }
    if (event.which == 50) {
      var audio = document.getElementById('bongo2')
      audio.currentTime = 0;
      audio.play();
      var borderElement = document.getElementById('1');
      borderElement.style.border = "3px solid black";
      borderElement.style.color = "black";
    }
    if (event.which == 51) {
      var audio = document.getElementById('bongo3');
      audio.currentTime = 0;
      audio.play();
      var borderElement = document.getElementById('2');
      borderElement.style.border = "3px solid black";
      borderElement.style.color = "black";
    }
    if (event.which == 52) {
      var audio = document.getElementById('bongo4');
      audio.currentTime = 0;
      audio.play();
      var borderElement = document.getElementById('3');
      borderElement.style.border = "3px solid black";
      borderElement.style.color = "black";
    }
    if (event.which == 53) {
      var audio = document.getElementById('bongo5');
      audio.currentTime = 0;
      audio.play();
      var borderElement = document.getElementById('4');
      borderElement.style.border = "3px solid black";
      borderElement.style.color = "black";
    }
    if (event.which == 54) {
      var audio = document.getElementById('bongo5')
      audio.currentTime = 0;
      audio.play();
      var borderElement = document.getElementById('5');
      borderElement.style.border = "3px solid black";
      borderElement.style.color = "black";
    }
    if (event.which == 55) {
      var audio = document.getElementById('bongo9');
      audio.play();
      var borderElement = document.getElementById('6');
      borderElement.style.border = "3px solid black";
      borderElement.style.color = "black";
    }
    if (event.which == 56) {
      var audio = document.getElementById('bongo9');
      audio.pause(); 
      var borderElement = document.getElementById('7');
      borderElement.style.border = "3px solid black";
      borderElement.style.color = "black";
    }
    if (event.which == 57) {
      var audio = document.getElementById('bongo9');
      audio.currentTime = 0;
      audio.play();
      var borderElement = document.getElementById('8');
      borderElement.style.border = "3px solid black";
      borderElement.style.color = "black";
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.which == 49) {
      var borderElement = document.getElementById('0');
      borderElement.style.border = "3px solid white";
      borderElement.style.color = "white";
    }
    if (event.which == 50) {
      var borderElement = document.getElementById('1');
      borderElement.style.border = "3px solid white";
      borderElement.style.color = "white";
    }
    if (event.which == 51) {
      var borderElement = document.getElementById('2');
      borderElement.style.border = "3px solid white";
      borderElement.style.color = "white";
    }
    if (event.which == 52) {
      var borderElement = document.getElementById('3');
      borderElement.style.border = "3px solid white";
      borderElement.style.color = "white";
    }
    if (event.which == 53) {
      var borderElement = document.getElementById('4');
      borderElement.style.border = "3px solid white";
      borderElement.style.color = "white";
    }
    if (event.which == 54) {
      var borderElement = document.getElementById('5');
      borderElement.style.border = "3px solid white";
      borderElement.style.color = "white";
    }
    if (event.which == 55) {
      var borderElement = document.getElementById('6');
      borderElement.style.border = "3px solid white";
      borderElement.style.color = "white";
    }
    if (event.which == 56) {
      var borderElement = document.getElementById('7');
      borderElement.style.border = "3px solid white";
      borderElement.style.color = "white";
    }
    if (event.which == 57) {
      var borderElement = document.getElementById('8');
      borderElement.style.border = "3px solid white";
      borderElement.style.color = "white";
    }
  });

  $(".game-square").click(function () {
    var squareId = $(this).attr('id');
    playBongo(squareId);
  });
});
