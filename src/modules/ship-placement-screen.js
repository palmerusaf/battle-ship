import "../styles/ship-placement-screen.scss";
import { Components } from "./components";
import { Interface } from "./interface";
import { pubsub } from "./pubsub";

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
  flipShipButton.addEventListener("click", Interface.flipShipClick);
  flipShipButton.dataset.axis = "x";
  buttonField.appendChild(flipShipButton);

  const reset = Components.newButton("Reset");
  reset.addEventListener("click", Interface.resetClick);
  buttonField.appendChild(reset);

  const placementGrid = Components.newGrid();
  placementGrid.setClickable();
  placementGrid.addParentClass("placement-grid");
  placementGrid.setCoordinateHoverMsg("Place Ship at");
  placementGrid.addEventToElements("click", Interface.placementGridClick);
  pubsub.subscribe("resetClick", placementGrid.resetShips);
  pubsub.subscribe("addShipToPlacementGrid", placementGrid.addShipToGrid);
  shipPlacementScreen.appendChild(placementGrid.render());

  const continueButton = Components.newButton("Continue");
  continueButton.classList.add("continue");
  continueButton.addEventListener("click", Interface.continueClick);
  shipPlacementScreen.appendChild(continueButton);
}
