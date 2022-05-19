import "./styles/footer.scss";
import "./styles/reset.scss";
import { Render } from "./modules/render";
import { GameBoard } from "./modules/game-board";
import { pubsub } from "./modules/pubsub";

const enemyGameBoard = GameBoard("Enemy");
enemyGameBoard.placeAllShipsAtRandomCoordinates();
const playerGameBoard = GameBoard("Player");

pubsub.subscribe("flipShipClick", playerGameBoard.togglePlacementAxis);

pubsub.subscribe("resetClick", playerGameBoard.resetPlacement);

pubsub.subscribe("continueClick", () => {
  if (!playerGameBoard.areAllShipsPlaced()) return;
  Render.clearContent();
  Render.battleScreen();
});

pubsub.subscribe("placementGridClick", (coordinate) => {
  if (playerGameBoard.areAllShipsPlaced()) return;
  const axis = playerGameBoard.getPlacementAxis();
  if (playerGameBoard.isIllegalShipPlacement(coordinate, axis)) return;
  const shipIndex = playerGameBoard.getPlacementIndex();
  playerGameBoard.placeShip(coordinate);
  pubsub.publish("addShipToPlacementGrid", { coordinate, axis, shipIndex });
});

pubsub.subscribe("enemyGridClick");
pubsub.subscribe("playAgainClick");

Render.shipPlacementScreen();
