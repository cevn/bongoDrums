
$(document).ready(function () {
  $(".game-square").click(function () {
    var squareId = parseInt($(this).attr('id'));
    if (gameBoard[squareId].owner === "") {
      if (playerOne.turn === true) {
        gameBoard[squareId].owner = playerOne.symbol;
        $(this).css("background-size", "contain");
        $(this).css("background-image", "url('img/imageX.png')");
        playerOne.owns.push(squareId);
        if (winCondition1()) {
          alert(playerOne.name + ' wins!');
          reInitialize();
        } else if (tie()) {
          alert("You tied!");
          reInitialize();
          $(".game-square").css("background-image", "");
        } else {
          switchTurn();
        }
      } else {
        gameBoard[squareId].owner = playerTwo.symbol;
        $(this).css("background-size", "contain");
        $(this).css("background-image", "url('img/imageO.png')");
        playerTwo.owns.push(squareId);
        if (winCondition2()) {
          alert(playerTwo.name + ' wins!');
          $(".game-square").css("background-image", "");
          reInitialize();
        } else if (tie()) {
          alert("You tied!");
          reInitialize();
          $(".game-square").css("background-image", "");
        } else {
          switchTurn();
        }
      }
    } else {
      alert("That square is already taken!");
    }
  });
});
