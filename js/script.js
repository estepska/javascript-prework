{
  function playGame(playerInput) {
    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      }

      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    };
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log("Wylosowana liczba to: " + randomNumber);

    const computerMove = getMoveName(randomNumber);
    printMessage("Ruch komputera: " + computerMove);

    /*if (randomNumber == 1) {
    computerMove = 'kamień';
    } else if (randomNumber == 2) {
    computerMove = 'papier';
    } else if (randomNumber == 3) {
    computerMove = 'nożyce';
    }
    printMessage('Mój ruch to: ' + computerMove);*/

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);*/

    const playerMove = getMoveName(playerInput);
    printMessage("Ruch gracza: " + playerMove);

    /*if (playerInput == '1'){
        playerMove = 'kamień'; 
    } else if (playerInput == '2') {
        playerMove = 'papier';
    } else if (playerInput == '3') {
        playerMove = 'nożyce';
    }
    printMessage('Twój ruch to: ' + playerMove);*/

    const displayResult = function (argComputerMove, argPlayerMove) {
      if (
        (argPlayerMove == "kamień" && argComputerMove == "nożyce") ||
        (argPlayerMove == "papier" && argComputerMove == "kamień") ||
        (argPlayerMove == "nożyce" && argComputerMove == "papier")
      ) {
        printMessage("Ty wygrywasz");
      } else if (argPlayerMove == argComputerMove) {
        printMessage("Remis");
      } else {
        printMessage("Przegrana");
      }
    };
    displayResult(computerMove, playerMove);
  }

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
    console.log("Kliknięty rock");
  });

  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
    console.log("Kliknięty paper");
  });

  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
      console.log("Kliknięty scissors");
    });
}
