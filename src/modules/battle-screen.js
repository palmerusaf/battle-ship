import "../styles/battle-screen.scss";
import { pubsub } from "./pubsub";
import { newGridAreaFor } from "./new-grid-area";
import { newShipListFor } from "./new-ship-list";
import { Render } from "./render";

export function battleScreen() {
  const content = document.querySelector(".content");

  const battleScreen = document.createElement("div");
  battleScreen.classList.add("battle-screen");
  content.appendChild(battleScreen);

  battleScreen.appendChild(newGridAreaFor("Enemy"));
  battleScreen.appendChild(newShipListFor("Enemy"));

  battleScreen.appendChild(newGridAreaFor("Player"));
  battleScreen.appendChild(newShipListFor("Player"));

  function eraseShipFromList(data) {
    const { playerName, shipIndex } = data;
    const ship = document.querySelector(
      `.${playerName}-ship-list-item-${shipIndex}`
    );
    ship.classList.add("sunk");
  }
  pubsub.subscribe("shipHasSunk", eraseShipFromList);
}
