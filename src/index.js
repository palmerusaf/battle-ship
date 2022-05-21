import "./styles/footer.scss";
import "./styles/reset.scss";
import { Render } from "./modules/render";
import { GameBoard } from "./modules/game-board";
import { pubsub } from "./modules/pubsub";
import { Interface } from "./modules/interface";

const playerGameBoard = GameBoard("Player");
playerGameBoard.placeAllShipsAtRandomCoordinates();
Render.battleScreen(playerGameBoard.getFleetLocationInfo());
Interface.shipHasSunk({ shipIndex: 0, playerName: "Player" });
Interface.shipHasSunk({ shipIndex: 1, playerName: "Player" });
Interface.shipHasSunk({ shipIndex: 2, playerName: "Enemy" });
Interface.shipHasSunk({ shipIndex: 2, playerName: "Player" });
