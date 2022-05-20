import { battleScreen } from "./battle-screen";
import { titleScreen } from "./title-screen";
import { shipPlacementScreen } from "./placement-screen";
import { gameOverScreen } from "./game-over-screen";

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
