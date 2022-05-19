import { indexToShipName } from "./index-to-ship-name";
export function newGrid() {
  const GRID_SIZE = 100;
  const gridContainer = initGridWithElements();

  function initGridWithElements() {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    for (let i = 0; i < GRID_SIZE; i++) {
      const gridElement = document.createElement("div");
      gridElement.classList.add("grid-container__element");
      gridContainer.appendChild(gridElement);
    }
    return gridContainer;
  }

  function _modElements(mod) {
    const gridElements = [...gridContainer.children];
    gridElements.forEach(mod);
  }

  function render() {
    return gridContainer;
  }

  function setClickable() {
    _modElements((gridElement) => {
      gridElement.setAttribute("tabindex", "0");
      gridElement.classList.add("clickable");
    });
  }

  function setCoordinateHoverMsg(message) {
    _modElements(
      (gridElement, index) =>
        (gridElement.title = `${message} ${xYCoordinate(index)}`)
    );

    function xYCoordinate(index) {
      return `(${(index % 10) + 1}, ${Math.floor(index / 10 + 1)})`;
    }
  }

  function addParentClass(className) {
    gridContainer.classList.add(className);
  }

  function addChildClass(className) {
    _modElements((gridElement) => gridElement.classList.add(className));
  }

  function addEventToElements(pEventType, pEvent) {
    _modElements((gridElement) =>
      gridElement.addEventListener(pEventType, pEvent)
    );
  }

  function addShipToGrid(coordinate, shipIndex, axis) {
    const ship = document.createElement("img");
    ship.classList.add("grid-container__ship", `ship-index-${shipIndex}`);
    if (axis === "y") ship.classList.add("grid-container__ship--rotated");
    ship.src = `/src/imgs/${indexToShipName(shipIndex)}.png`;
    gridContainer.children[coordinate].appendChild(ship);
    gridContainer.children[coordinate].classList.remove("clickable");
  }

  function resetShips() {
    _modElements((gridElement) => (gridElement.textContent = ""));
    setClickable();
  }

  return {
    render,
    setClickable,
    setCoordinateHoverMsg,
    addParentClass,
    addChildClass,
    addEventToElements,
    addShipToGrid,
    resetShips,
  };
}
