import "./styles/footer.scss";
import "./styles/reset.scss";
import { Render } from "./modules/render";
import { GameBoard } from "./modules/game-board";

const enemyGameBoard = GameBoard();
const playerGameBoard = GameBoard();
Render.shipPlacementScreen();
