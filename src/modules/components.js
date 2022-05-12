import "../styles/components.scss";

export const Components = (() => {
  function newButton(label) {
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = label;
    return button;
  }

  return {
    newButton,
  };
})();
