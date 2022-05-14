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
  gridLabel.textContent = "Enemy's Grid";
  gridArea.appendChild(gridLabel);

  const grid = Components.newGrid();
  grid.addParentClass("battle-grid");
  grid.setClickable();
  gridArea.appendChild(grid.render());

  const inventoryArea = document.createElement("div");
  inventoryArea.classList.add("inventory-area");
  battleScreen.appendChild(inventoryArea);

  const inventoryLabel = document.createElement("h3");
  inventoryLabel.classList.add("inventory-area__label");
  inventoryLabel.textContent = "Enemy's Inventory";
  inventoryArea.appendChild(inventoryLabel);

  const inventoryList = document.createElement("ul");
  inventoryList.classList.add("inventory-area__list");
  inventoryArea.appendChild(inventoryList);

  const inventoryItem = document.createElement("li");
  inventoryItem.classList.add("inventory-area__item");
  inventoryList.appendChild(inventoryItem);

  const inventoryImg = document.createElement("img");
  inventoryImg.classList.add("inventory-area__img");
  inventoryItem.appendChild(inventoryImg);
}
