import "./styles/footer.scss";
import "./styles/reset.scss";
import { Render } from "./modules/render";
import { GameBoard } from "./modules/game-board";
import { pubsub } from "./modules/pubsub";

const enemyGameBoard = GameBoard();
const playerGameBoard = GameBoard();
pubsub.subscribe("flipShipClick", playerGameBoard.togglePlacementAxis);
Render.battleScreen();
pubsub.publish("shipHasSunk", {
  shipIndex: 1,
  playerName: "Player",
});
pubsub.publish("shipHasSunk", {
  shipIndex: 2,
  playerName: "Enemy",
});
