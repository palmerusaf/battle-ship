import { Components } from "./components";
import { Interface } from "./interface";

export function newGridAreaFor(playerName) {
  const gridArea = document.createElement("div");
  gridArea.classList.add("grid-area", `grid-area--${playerName}`);

  const gridLabel = document.createElement("h2");
  gridLabel.classList.add("grid-area__label");
  gridLabel.textContent = `${playerName} Grid`;
  gridArea.appendChild(gridLabel);

  const grid = Components.newGrid();
  if (playerName === "Enemy") addEnemyAttributes(grid);
  grid.addParentClass("grid-area__grid");
  gridArea.appendChild(grid.render());

  function addEnemyAttributes(pGrid) {
    pGrid.setClickable();
    pGrid.addEventToElements("click", Interface.enemyGridClick);
  }

  return gridArea;
}
