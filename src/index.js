import "./styles/footer.scss";
import "./styles/reset.scss";

import "./styles/ship-placement-screen.scss";
import { Components } from "./modules/components";

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

const GRID_SIZE = 100;
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
for (let i = 0; i < GRID_SIZE; i++) {
  const gridElement = document.createElement("div");
  gridElement.classList.add("grid-container__element");
  gridElement.setAttribute("tabindex", "0");
  gridElement.title = `Coordinate (${(i + 1) % 10}, ${Math.floor(i / 10 + 1)})`;
  gridContainer.appendChild(gridElement);
}
shipPlacementScreen.appendChild(gridContainer);

const continueButton = Components.newButton("Continue");
continueButton.classList.add("continue");
shipPlacementScreen.appendChild(continueButton);
