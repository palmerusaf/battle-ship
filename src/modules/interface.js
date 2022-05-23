import { Render } from "./render";
import { GameBoard } from "./game-board";
import { Game } from "./game.js";

export const Interface = (() => {
  let enemyGameBoard;
  let playerGameBoard;

  function startGameClick() {
    enemyGameBoard = GameBoard("Enemy");
    enemyGameBoard.placeAllShipsAtRandomCoordinates();
    playerGameBoard = GameBoard("Player");
    Render.clearContent();
    Render.placementScreen();
  }

  function flipShipClick(e) {
    playerGameBoard.togglePlacementAxis();
    e.target.classList.toggle("flip-button--flipped");
  }

  function randomClick(displayGrid) {
    resetClick(displayGrid);
    playerGameBoard.placeAllShipsAtRandomCoordinates();
    displayGrid.addAllShips(playerGameBoard.getFleetLocationInfo());
  }

  function resetClick(displayGrid) {
    displayGrid.resetShips();
    playerGameBoard.resetPlacement();
  }

  function continueClick() {
    if (!playerGameBoard.areAllShipsPlaced()) return;
    Render.clearContent();
    Render.battleScreen(playerGameBoard.getFleetLocationInfo());
  }

  function placementGridClick({ target, displayGrid }) {
    if (playerGameBoard.areAllShipsPlaced()) return;

    const coordinate = _getIndexOf(target);
    const axis = playerGameBoard.getPlacementAxis();
    if (playerGameBoard.isIllegalShipPlacement(coordinate, axis)) return;

    const shipIndex = playerGameBoard.getPlacementIndex();
    playerGameBoard.placeShip(coordinate);
    displayGrid.addShipToGrid({ coordinate, axis, shipIndex });
  }

  function enemyGridClick({ target, enemyDisplayGrid, playerDisplayGrid }) {
    if (enemyGameBoard.isFleetSunk() || playerGameBoard.isFleetSunk()) return;
    const coordinate = _getIndexOf(target);
    if (enemyGameBoard.getCoordinateStatus(coordinate).isPlayed) return;

    Game.playerTurn({ coordinate, enemyDisplayGrid, enemyGameBoard });
    Game.enemyTurn({ playerGameBoard, playerDisplayGrid });
  }

  function playAgainClick() {
    Render.clearContent();
    Render.titleScreen();
  }

  function quitClick() {
    window.open("", "_self").document.write("");
    window.open("", "_self").close();
    window.location.href = "https://github.com/palmerusaf/battle-ship";
  }

  function _getIndexOf(pTarget) {
    if (!pTarget.classList.contains("grid-container__element"))
      pTarget = pTarget.parentElement;
    return Array.from(pTarget.parentElement.children).indexOf(pTarget);
  }

  return {
    startGameClick,
    flipShipClick,
    randomClick,
    resetClick,
    continueClick,
    placementGridClick,
    enemyGridClick,
    playAgainClick,
    quitClick,
  };
})();
