import "/src/styles/title-screen.scss";
import { Components } from "/src/modules/components";
import { Interface } from "/src/modules/interface";

export const titleScreen = () => {
  const content = document.querySelector(".content");

  const titleScreen = document.createElement("div");
  titleScreen.classList.add("title-screen");
  content.appendChild(titleScreen);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "BATTLESHIP";
  titleScreen.appendChild(title);

  const playButton = Components.newButton("Start Game");
  playButton.addEventListener("click", Interface.startGameClick);
  playButton.classList.add("play-button");

  titleScreen.appendChild(playButton);
};
