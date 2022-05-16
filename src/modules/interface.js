import { Render } from "./render";

export const Interface = (() => {
  function startGameClick() {
    Render.clearContent();
    Render.shipPlacementScreen();
  }

  function flipShipClick() {
    console.log("TO DO handle flip ship click.");
  }

  function resetClick() {
    console.log("TO DO handle reset click.");
  }

  function continueClick() {
    console.log("TO DO handle continue click.");
  }

  function placementGridClick(e) {
    console.log(
      "TO DO handle click for placement grid at",
      _getIndexOf(e.target)
    );
  }

  function enemyGridClick(e) {
    console.log("TO DO handle click for enemy grid at", _getIndexOf(e.target));
  }

  function playAgainClick() {
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
