import "/src/styles/components.scss";
import { newGrid } from "/src/modules/new-grid";

export const Components = (() => {
  const newButton = (label) => {
    const button = document.createElement("button");
    button.classList.add("button", "clickable");
    button.textContent = label;
    return button;
  };

  return {
    newButton,
    newGrid,
  };
})();
