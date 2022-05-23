import "../styles/battle-screen.scss";
import { newGridAreaFor } from "./new-grid-area";
import { newShipListFor } from "./new-ship-list";
import { Components } from "./components";
import { Interface } from "./interface";

export function battleScreen(playerFleetLocationInfo) {
  const content = document.querySelector(".content");

  const battleScreen = document.createElement("div");
  battleScreen.classList.add("battle-screen");
  content.appendChild(battleScreen);

  const enemyDisplayGrid = Components.newGrid();
  addEnemyAttributesTo(enemyDisplayGrid);
  battleScreen.appendChild(newGridAreaFor("Enemy", enemyDisplayGrid));
  battleScreen.appendChild(newShipListFor("Enemy"));

  const playerDisplayGrid = Components.newGrid();
  playerDisplayGrid.addAllShips(playerFleetLocationInfo);
  battleScreen.appendChild(newGridAreaFor("Player", playerDisplayGrid));
  battleScreen.appendChild(newShipListFor("Player"));

  function addEnemyAttributesTo(grid) {
    grid.setClickable();
    grid.addEventToElements("click", (e) =>
      Interface.enemyGridClick({
        target: e.target,
        enemyDisplayGrid,
        playerDisplayGrid,
      })
    );
    grid.setCoordinateHoverMsg("Attack coordinate");
  }
}
