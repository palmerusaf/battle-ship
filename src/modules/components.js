import "../styles/components.scss";

export const Components = (() => {
  function newButton(label) {
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = label;
    return button;
  }
  function newGrid() {
    const GRID_SIZE = 100;
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    for (let i = 0; i < GRID_SIZE; i++) {
      const gridElement = document.createElement("div");
      gridElement.classList.add("grid-container__element");
      gridContainer.appendChild(gridElement);
    }
    function _modElements(mod) {
      const gridElements = [...gridContainer.children];
      gridElements.forEach(mod);
    }

    return {
      render: () => {
        return gridContainer;
      },
      
      setClickable: () =>
        _modElements((gridElement) =>
          gridElement.setAttribute("tabindex", "0")
        ),
        
      setCoordinateHoverMsg: (message) => {
        _modElements(
          (gridElement, index) =>
            (gridElement.title = `${message} ${xYCoordinate(index)}`)
        );
        function xYCoordinate(index) {
          return `(${(index % 10) + 1}, ${Math.floor(index / 10 + 1)})`;
        }
      },
      
      addParentClass: (className) => gridContainer.classList.add(className),
      
      addChildClass: (className) =>
        _modElements((gridElement) => gridElement.classList.add(className)),
    };
  }

  return {
    newButton,
    newGrid,
  };
})();
