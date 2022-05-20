import { battleScreen } from "./battle-screen";
import { titleScreen } from "./title-screen";
import { shipPlacementScreen } from "./ship-placement-screen";
import { gameOverScreen } from "./game-over-screen";

export const Render = (() => {
  const clearContent = () =>
    (document.querySelector(".content").textContent = "");

  const attack = (playerName, coordinate, isHit) => {
    const gridContainer = document.querySelector(
      `.grid-area--${playerName} > .grid-area__grid`
    );
    playBombAnimation(thenMarkHitOrMiss);

    function playBombAnimation(callBack) {
      const bombDropAnimation = document.createElement("div");
      bombDropAnimation.classList.add("attack-grid", "attack-grid__bomb");
      bombDropAnimation.textContent = "💣";
      bombDropAnimation.addEventListener("animationend", callBack);
      gridContainer.children[coordinate].appendChild(bombDropAnimation);
    }

    function thenMarkHitOrMiss() {
      gridContainer.children[coordinate].textContent = "";
      gridContainer.children[coordinate].classList.remove("clickable");
      const hitOrMiss = document.createElement("div");
      hitOrMiss.classList.add("attack-grid", "attack-grid");
      hitOrMiss.textContent = isHit ? "💥" : "💦";
      gridContainer.children[coordinate].appendChild(hitOrMiss);
    }
  };

  return {
    battleScreen,
    titleScreen,
    shipPlacementScreen,
    gameOverScreen,
    clearContent,
    attack,
  };
})();
