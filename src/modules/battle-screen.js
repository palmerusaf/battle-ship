import "../styles/battle-screen.scss";
import { Components } from "./components";

export function battleScreen() {
  const content = document.querySelector(".content");

  const battleScreen = document.createElement("div");
  battleScreen.classList.add("battle-screen");
  content.appendChild(battleScreen);

  const gridArea = document.createElement("div");
  gridArea.classList.add("grid-area");
  battleScreen.appendChild(gridArea);

  const gridLabel = document.createElement("h2");
  gridLabel.classList.add("grid-area__label");
  gridLabel.textContent = "Enemy Grid";
  gridArea.appendChild(gridLabel);

  const grid = Components.newGrid();
  grid.addParentClass("battle-grid");
  grid.setClickable();
  gridArea.appendChild(grid.render());

  const shipArea = document.createElement("div");
  shipArea.classList.add("ship-area");
  battleScreen.appendChild(shipArea);

  const shipLabel = document.createElement("h3");
  shipLabel.classList.add("ship-area__label");
  shipLabel.textContent = "Enemy ship";
  shipArea.appendChild(shipLabel);

  const shipList = document.createElement("ul");
  shipList.classList.add("ship-area__list");
  shipArea.appendChild(shipList);

  addShipsTo(shipList);

  function addShipsTo(shipList) {
    const NUM_SHIPS_IN_FLEET = 7;
    for (let i = 0; i < NUM_SHIPS_IN_FLEET; i++) {
      const shipItem = document.createElement("li");
      shipItem.classList.add(
        "ship-area__item",
        `enemy-ship-list-item-${i}`
      );
      shipList.appendChild(shipItem);

      const shipImg = document.createElement("img");
      shipImg.classList.add("ship-area__img");
      shipImg.src = selectShipImgBasedOn(i);
      shipItem.appendChild(shipImg);
    }
    function selectShipImgBasedOn(index) {
      let imgSrc = "/src/imgs/";
      if (index === 0) return imgSrc + "carrier.png";
      if (index === 1) return imgSrc + "battleship.png";
      if (index === 2) return imgSrc + "cruiser.png";
      if (index === 3 || index === 4) return imgSrc + "destroyer.png";
      if (index === 5 || index === 6) return imgSrc + "submarine.png";
    }
  }
}
