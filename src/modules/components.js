import "../styles/components.scss";
import { newGrid } from "./new-grid";

export const Components = (() => {
  function newButton(label) {
    const button = document.createElement("button");
    button.classList.add("button", "clickable");
    button.textContent = label;
    return button;
  }

  return {
    newButton,
    newGrid,
  };
})();
