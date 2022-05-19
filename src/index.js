import "./styles/footer.scss";
import "./styles/reset.scss";
import { Render } from "./modules/render";
import { GameBoard } from "./modules/game-board";
import { pubsub } from "./modules/pubsub";

const enemyGameBoard = GameBoard();
const playerGameBoard = GameBoard();
pubsub.subscribe("flipShipClick", playerGameBoard.togglePlacementAxis);
Render.battleScreen();
