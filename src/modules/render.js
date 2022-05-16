import { battleScreen } from "./battle-screen";
import { titleScreen } from "./title-screen";
import { shipPlacementScreen } from "./ship-placement-screen";
import { gameOverScreen } from "./game-over-screen";

export const Render = (() => {
  return {
    battleScreen,
    titleScreen,
    shipPlacementScreen,
    gameOverScreen,
  };
})();
