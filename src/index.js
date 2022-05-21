import "./styles/footer.scss";
import "./styles/reset.scss";
import { Render } from "./modules/render";
import { GameBoard } from "./modules/game-board";

const playerGameBoard = GameBoard("Player");
playerGameBoard.placeAllShipsAtRandomCoordinates();
Render.battleScreen(playerGameBoard.getFleetLocationInfo());