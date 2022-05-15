import "../styles/battle-screen.scss";
import { Components } from "./components";

export function battleScreen() {
  const content = document.querySelector(".content");

  const battleScreen = document.createElement("div");
  battleScreen.classList.add("battle-screen");
  content.appendChild(battleScreen);

  battleScreen.appendChild(newGridAreaFor("Enemy"));
  battleScreen.appendChild(newShipListFor("Enemy"));

  battleScreen.appendChild(newGridAreaFor("Player"));
  battleScreen.appendChild(newShipListFor("Player"));

  function newGridAreaFor(playerName) {
    const gridArea = document.createElement("div");
    gridArea.classList.add("grid-area");

    const gridLabel = document.createElement("h2");
    gridLabel.classList.add("grid-area__label");
    gridLabel.textContent = `${playerName} Grid`;
    gridArea.appendChild(gridLabel);

    const grid = Components.newGrid();
    grid.addParentClass("battle-grid");
    if (playerName === "Enemy") grid.setClickable();
    gridArea.appendChild(grid.render());

    return gridArea;
  }

  function newShipListFor(playerName) {
    const shipArea = document.createElement("div");
    shipArea.classList.add("ship-area");

    const shipLabel = document.createElement("h3");
    shipLabel.classList.add("ship-area__label");
    shipLabel.textContent = `${playerName} Ships`;
    shipArea.appendChild(shipLabel);

    const shipList = document.createElement("ul");
    shipList.classList.add("ship-area__list");
    shipArea.appendChild(shipList);

    addShipsTo(shipList);

    return shipArea;
    function addShipsTo(shipList) {
      const NUM_SHIPS_IN_FLEET = 7;
      for (let i = 0; i < NUM_SHIPS_IN_FLEET; i++) {
        const shipItem = document.createElement("li");
        shipItem.classList.add(
          "ship-area__item",
          `${playerName}-ship-list-item-${i}`
        );
        shipList.appendChild(shipItem);

        const shipImg = document.createElement("img");
        shipImg.src = `/src/imgs/${mapShipTo(i)}.png`;
        shipItem.appendChild(shipImg);
      }
      function mapShipTo(index) {
        if (index === 0) return "carrier";
        if (index === 1) return "battleship";
        if (index === 2) return "cruiser";
        if (index === 3 || index === 4) return "destroyer";
        if (index === 5 || index === 6) return "submarine";
      }
    }
  }
}
