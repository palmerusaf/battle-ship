import { battleScreen } from "/src/modules/battle-screen";
import { titleScreen } from "/src/modules/title-screen";
import { shipPlacementScreen } from "/src/modules/placement-screen";
import { gameOverScreen } from "/src/modules/game-over-screen";

export const Render = (() => {
  const clearContent = () =>
    (document.querySelector(".content").textContent = "");

  return {
    battleScreen,
    titleScreen,
    shipPlacementScreen,
    gameOverScreen,
    clearContent,
  };
})();
