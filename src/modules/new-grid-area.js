import { Components } from "./components";

export function newGridAreaFor(playerName) {
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
