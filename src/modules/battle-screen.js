import "../styles/battle-screen.scss";
import { newGridAreaFor } from "./new-grid-area";
import { newShipListFor } from "./new-ship-list";

export function battleScreen() {
  const content = document.querySelector(".content");

  const battleScreen = document.createElement("div");
  battleScreen.classList.add("battle-screen");
  content.appendChild(battleScreen);

  battleScreen.appendChild(newGridAreaFor("Enemy"));
  battleScreen.appendChild(newShipListFor("Enemy"));

  battleScreen.appendChild(newGridAreaFor("Player"));
  battleScreen.appendChild(newShipListFor("Player"));
}
