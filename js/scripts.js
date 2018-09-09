var playBongo = function(squareNum) {
  if (squareNum === "0"){
    var audio = document.getElementById("bongo1");
    audio.play(); 
  }
  if (squareNum === "1") {
    var audio = document.getElementById("bongo2");
    audio.play();
  }
  if (squareNum === "2") {
    var audio = document.getElementById("bongo3");
    audio.play();
  }
  if (squareNum === "3") {
    var audio = document.getElementById("bongo4");
    audio.play();
  }
  else {
    var audio = document.getElementById("bongo5");
    audio.play(); 
  }
}
$(document).ready(function () {
  $(".game-square").click(function () {
    var squareId = $(this).attr('id');
    playBongo(squareId);
  });
});
