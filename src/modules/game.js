import { Render } from "./render";

export const Game = (() => {
  const playerTurn = ({ coordinate, enemyDisplayGrid, enemyGameBoard }) => {
    takeTurn({
      coordinate,
      displayGrid: enemyDisplayGrid,
      gameBoard: enemyGameBoard,
    });
    if (enemyGameBoard.isFleetSunk()) {
      Render.gameOverScreen({ isWinner: true });
    }
  };

  const enemyTurn = ({ playerGameBoard, playerDisplayGrid }) => {
    const legalAttack = playerGameBoard.generateRandomLegalAttack();
    takeTurn({
      coordinate: legalAttack,
      displayGrid: playerDisplayGrid,
      gameBoard: playerGameBoard,
      isPlayer: true,
    });
    if (playerGameBoard.isFleetSunk()) {
      Render.gameOverScreen({ isWinner: false });
    }
  };

  function takeTurn({ coordinate, displayGrid, gameBoard, isPlayer }) {
    gameBoard.receiveAttack(coordinate);
    const isHit =
      gameBoard.getCoordinateStatus(coordinate).shipIndex !== "none";
    displayGrid.receiveAttack({ coordinate, isHit });

    if (gameBoard.getIsNewSinkingReport()) {
      const report = gameBoard.getLatestSinkingReport();
      eraseShipFromList(report);
      if (!isPlayer) displayGrid.addShipToGrid(report);
    }

    function eraseShipFromList({ playerName, shipIndex }) {
      const ship = document.querySelector(
        `.${playerName}-ship-list-item-${shipIndex}`
      );
      ship.classList.add("sunk");
    }
  }

  return { playerTurn, enemyTurn };
})();
