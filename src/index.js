import "./styles/footer.scss";
import "./styles/reset.scss";
import { Render } from "./modules/render";
import { GameBoard } from "./modules/game-board";
import { pubsub } from "./modules/pubsub";

const enemyGameBoard = GameBoard("Enemy");
enemyGameBoard.placeAllShipsAtRandomCoordinates();
const playerGameBoard = GameBoard("Player");
Render.titleScreen();
