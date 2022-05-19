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
  if (playerName === "Enemy") addEnemyAttributes();
  grid.addParentClass("grid-area__grid");
  gridArea.appendChild(grid.render());

  function addEnemyAttributes() {
    grid.setClickable();
    grid.addEventToElements("click", Interface.enemyGridClick);
    grid.setCoordinateHoverMsg("Attack coordinate");
  }

  return gridArea;
}
