
export function newGridAreaFor(playerName, grid) {
  const gridArea = document.createElement("div");
  gridArea.classList.add("grid-area", `grid-area--${playerName}`);

  const gridLabel = document.createElement("h2");
  gridLabel.classList.add("grid-area__label");
  gridLabel.textContent = `${playerName} Grid`;
  gridArea.appendChild(gridLabel);

  grid.addParentClass("grid-area__grid");
  gridArea.appendChild(grid.render());

  return gridArea;
}
