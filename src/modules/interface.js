import { Render } from "./render";
import { pubsub } from "./pubsub";
import { GameBoard } from "./game-board";

export const Interface = (() => {
  const enemyGameBoard = GameBoard("Enemy");
  enemyGameBoard.placeAllShipsAtRandomCoordinates();
  const playerGameBoard = GameBoard("Player");

  function startGameClick() {
    Render.clearContent();
    Render.placementScreen();
  }

  function flipShipClick(e) {
    playerGameBoard.togglePlacementAxis();
    e.target.classList.toggle("flip-button--flipped");
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
    const coordinate = _getIndexOf(target);
    if (playerGameBoard.areAllShipsPlaced()) return;
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

    playersTurn();

    function playersTurn() {
      enemyGameBoard.receiveAttack(coordinate);
      const isHit =
        enemyGameBoard.getCoordinateStatus(coordinate).shipIndex !== "none";
      enemyDisplayGrid.receiveAttack({ coordinate, isHit });
      if (enemyGameBoard.getIsNewSinkingReport()) {
        const report = enemyGameBoard.getLatestSinkingReport();
        console.log(report);
        eraseShipFromList(report);
        enemyDisplayGrid.addShipToGrid(report);
      }
      if (enemyGameBoard.isFleetSunk()) {
        Render.gameOverScreen({ isWinner: false });
      }
    }

    function eraseShipFromList({ playerName, shipIndex }) {
      const ship = document.querySelector(
        `.${playerName}-ship-list-item-${shipIndex}`
      );
      ship.classList.add("sunk");
    }
  }

  function playAgainClick() {
    pubsub.publish("playAgainClick");
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
    resetClick,
    continueClick,
    placementGridClick,
    enemyGridClick,
    playAgainClick,
    quitClick,
  };
})();
