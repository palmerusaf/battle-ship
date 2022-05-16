export const Interface = (() => {
  function startGameClick() {
    console.log("TO DO handle start game click.");
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
    console.log("TO DO handle click for placement grid at ", e);
  }

  function enemyGridClick(e) {
    console.log("TO DO handle click for enemy grid at ", e);
  }

  function playAgainClick() {
    console.log("TO DO handle play again click.");
  }

  function quitClick() {
    console.log("TO DO handle quit click.");
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
