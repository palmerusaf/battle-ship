import "../styles/ship-placement-screen.scss";
import { Components } from "../modules/components";

export function shipPlacementScreen() {
  const content = document.querySelector(".content");

  const shipPlacementScreen = document.createElement("div");
  shipPlacementScreen.classList.add("ship-placement-screen");
  content.appendChild(shipPlacementScreen);

  const welcomeMsg = document.createElement("h1");
  welcomeMsg.classList.add("welcome-msg");
  welcomeMsg.textContent = "Welcome";
  shipPlacementScreen.appendChild(welcomeMsg);

  const directions = document.createElement("p");
  directions.classList.add("directions");
  directions.textContent =
    "Place your ships by clicking or tapping on the grid. When you are ready press continue.";
  shipPlacementScreen.appendChild(directions);

  const buttonField = document.createElement("div");
  buttonField.classList.add("button-field");
  shipPlacementScreen.appendChild(buttonField);

  const flipShipButton = Components.newButton("Flip Ship");
  buttonField.appendChild(flipShipButton);

  const reset = Components.newButton("Reset");
  buttonField.appendChild(reset);

  const placementGrid = Components.newGrid();
  placementGrid.setClickable();
  placementGrid.addParentClass("placement-grid");
  placementGrid.setCoordinateHoverMsg("Place Ship at");
  shipPlacementScreen.appendChild(placementGrid.render());

  const continueButton = Components.newButton("Continue");
  continueButton.classList.add("continue");
  shipPlacementScreen.appendChild(continueButton);
}
