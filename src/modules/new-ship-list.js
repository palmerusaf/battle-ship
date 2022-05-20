import { indexToShipName } from "/src/modules/index-to-ship-name";

export function newShipListFor(playerName) {
  const shipArea = document.createElement("div");
  shipArea.classList.add("ship-area", `ship-area--${playerName}`);

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
      shipImg.src = `/src/imgs/${indexToShipName(i)}.png`;
      shipImg.classList.add("ship-area__img");
      shipItem.appendChild(shipImg);
    }
  }
}
