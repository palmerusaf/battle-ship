import { Render } from "./render";
import { pubsub } from "./pubsub";

export const Interface = (() => {
  function startGameClick() {
    Render.clearContent();
    Render.shipPlacementScreen();
  }

  function flipShipClick() {
    pubsub.publish("flipShipClick");
  }

  function resetClick() {
    pubsub.publish("resetClick");
  }

  function continueClick() {
    pubsub.publish("continueClick");
  }

  function placementGridClick(e) {
    pubsub.publish("placementGridClick", _getIndexOf(e.target));
  }

  function enemyGridClick(e) {
    pubsub.publish("enemyGridClick", _getIndexOf(e.target));
  }

  function playAgainClick() {
    pubsub.publish("playAgainClick");
    Render.clearContent();
    Render.titleScreen();
  }

  function quitClick() {
    window.open("", "_self").document.write("");
    window.open("", "_self").close();
    window.location.href = "https://github.com/palmerusaf/battle-ship";
  }

  function _getIndexOf(pTarget) {
    return Array.from(pTarget.parentElement.children).indexOf(pTarget);
  }

  return {
    startGameClick,
    flipShipClick,
    resetClick,
    continueClick,
    placementGridClick,
    enemyGridClick,
    playAgainClick,
    quitClick,
  };
})();
