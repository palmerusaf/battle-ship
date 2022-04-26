export function Player() {
  let _isTurn = true;

  const playGameBoard = (gameBoard, coordinate) =>
    gameBoard.receiveAttack(coordinate);

  const isLegalPlay = (gameBoard, coordinate) => {
    if (!_isTurn) return false;
    if (isOutsideGameBoard()) return false;
    const playedBefore = gameBoard.getCoordinateStatus(coordinate).isPlayed;
    if (playedBefore) return false;
    return true;

    function isOutsideGameBoard() {
      if (gameBoard.getCoordinateStatus(coordinate) === undefined) return true;
    }
  };

  const setIsTurn = (bool) => (_isTurn = bool);

  const createLegalPlayAtRandom = (gameBoard) => {
    const GRID_SIZE = 100;
    let randomInteger = makeRandomInt();
    while (!isLegalPlay(gameBoard, randomInteger)) {
      randomInteger = makeRandomInt();
    }

    return randomInteger;

    function makeRandomInt() {
      return Math.floor(Math.random() * GRID_SIZE);
    }
  };

  return { playGameBoard, isLegalPlay, setIsTurn, createLegalPlayAtRandom };
}
