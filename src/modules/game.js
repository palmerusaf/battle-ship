export const Game = {
  playerTurn: function ({ coordinate, enemyDisplayGrid, enemyGameBoard }) {
    enemyGameBoard.receiveAttack(coordinate);
    const isHit =
      enemyGameBoard.getCoordinateStatus(coordinate).shipIndex !== "none";
    enemyDisplayGrid.receiveAttack({ coordinate, isHit });

    if (enemyGameBoard.getIsNewSinkingReport()) {
      const report = enemyGameBoard.getLatestSinkingReport();
      eraseShipFromList(report);
      enemyDisplayGrid.addShipToGrid(report);
    }

    if (enemyGameBoard.isFleetSunk()) {
      Render.gameOverScreen({ isWinner: false });
    }
  },

  enemyTurn: function ({ playerGameBoard, playerDisplayGrid }) {

  },
};

function eraseShipFromList({ playerName, shipIndex }) {
  const ship = document.querySelector(
    `.${playerName}-ship-list-item-${shipIndex}`
  );
  ship.classList.add("sunk");
}
