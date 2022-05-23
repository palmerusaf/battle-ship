import "../styles/placement-screen.scss";
import { Components } from "/src/modules/components";
import { Interface } from "/src/modules/interface";

export const placementScreen = () => {
  const content = document.querySelector(".content");

  const placementScreen = document.createElement("div");
  placementScreen.classList.add("placement-screen");
  content.appendChild(placementScreen);

  const welcomeMsg = document.createElement("h1");
  welcomeMsg.classList.add("welcome-msg");
  welcomeMsg.textContent = "Welcome";
  placementScreen.appendChild(welcomeMsg);

  const directions = document.createElement("p");
  directions.classList.add("directions");
  directions.textContent =
    "Place your ships by clicking or tapping on the grid. When you are ready press continue.";
  placementScreen.appendChild(directions);

  const buttonField = document.createElement("div");
  buttonField.classList.add("button-field");
  placementScreen.appendChild(buttonField);

  const flipShipButton = Components.newButton("Flip Ship");
  flipShipButton.classList.add("flip-button");
  flipShipButton.addEventListener("click", Interface.flipShipClick);
  buttonField.appendChild(flipShipButton);

  const reset = Components.newButton("Reset");
  reset.addEventListener("click", () => Interface.resetClick(placementGrid));
  buttonField.appendChild(reset);

  const random = Components.newButton("Random");
  random.classList.add("crazy-spin");
  random.addEventListener("click", () => {
    Interface.randomClick(placementGrid);
  });
  buttonField.appendChild(random);

  const placementGrid = Components.newGrid();
  placementGrid.setClickable();
  placementGrid.addParentClass("placement-grid");
  placementGrid.setCoordinateHoverMsg("Place Ship at");
  placementGrid.addEventToElements("click", (e) =>
    Interface.placementGridClick({
      target: e.target,
      displayGrid: placementGrid,
    })
  );
  placementScreen.appendChild(placementGrid.render());

  const continueButton = Components.newButton("Continue");
  continueButton.classList.add("continue");
  continueButton.addEventListener("click", Interface.continueClick);
  placementScreen.appendChild(continueButton);
};
