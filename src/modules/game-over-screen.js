import "../styles/game-over-screen.scss";
import { Components } from "./components";
import { Interface } from "./interface";

export function gameOverScreen(isWinner) {
  const content = document.querySelector(".content");

  const gameOverContainer = document.createElement("div");
  gameOverContainer.classList.add("game-over");
  content.append(gameOverContainer);

  const title = document.createElement("h1");
  title.classList.add("game-over__title");
  title.textContent = "Game Over";
  gameOverContainer.appendChild(title);

  const winnerMsg = document.createElement("p");
  winnerMsg.classList.add("game-over__winner-msg");
  winnerMsg.textContent = `You have ${isWinner ? "won." : "lost."}`;
  gameOverContainer.appendChild(winnerMsg);

  const buttonField = document.createElement("div");
  buttonField.classList.add("game-over__button-field");
  gameOverContainer.appendChild(buttonField);

  const playAgainButton = Components.newButton("Play Again?");
  playAgainButton.addEventListener("click", Interface.playAgainClick);
  buttonField.appendChild(playAgainButton);

  const quitButton = Components.newButton("Quit");
  quitButton.addEventListener("click", Interface.quitClick);
  buttonField.appendChild(quitButton);
}
