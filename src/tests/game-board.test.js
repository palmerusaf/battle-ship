import { GameBoard } from "../modules/game-board";
import { pubsub } from "../modules/pubsub";

const newBoard = GameBoard();

function placeAllShipHorizontally() {
  newBoard.placeShip(0, "x");
  newBoard.placeShip(10, "x");
  newBoard.placeShip(20, "x");
  newBoard.placeShip(30, "x");
  newBoard.placeShip(40, "x");
  newBoard.placeShip(50, "x");
  newBoard.placeShip(60, "x");
}

function attackShipPlacedHorizontally(startingCoordinate, shipLength) {
  const endingCoordinate = startingCoordinate + (shipLength - 1);
  for (
    let coordinate = startingCoordinate;
    coordinate <= endingCoordinate;
    coordinate++
  ) {
    newBoard.receiveAttack(coordinate);
  }
}

it.skip("GameBoard.getCoordinateStatus Test -- returns all required info", () => {
  expect(newBoard.getCoordinateStatus(0)).toEqual({
    isPlayed,
    shipIndex,
  });
});

it.skip("Place first ship horizontally", () => {
  //place first ship
  newBoard.placeShip(0, "x");
  expect(newBoard.getCoordinateStatus(0)).toEqual({
    isPlayed: false,
    shipIndex: 0,
  });

  expect(newBoard.getCoordinateStatus(4)).toEqual({
    isPlayed: false,
    shipIndex: 0,
  });

  expect(newBoard.getCoordinateStatus(5)).toEqual({
    isPlayed: false,
    shipIndex: null,
  });
});

it.skip("Place last ship horizontally", () => {
  newBoard.placeShip(0, "x");
  newBoard.placeShip(10, "x");
  newBoard.placeShip(20, "x");
  newBoard.placeShip(30, "x");
  newBoard.placeShip(40, "x");
  newBoard.placeShip(50, "x");
  newBoard.placeShip(60, "x");
  expect(newBoard.getCoordinateStatus(60)).toEqual({
    isPlayed: false,
    shipIndex: 6,
  });

  expect(newBoard.getCoordinateStatus(61)).toEqual({
    isPlayed: false,
    shipIndex: null,
  });

  expect(newBoard.getCoordinateStatus(70)).toEqual({
    isPlayed: false,
    shipIndex: null,
  });
});

it.skip("Place first ship vertically", () => {
  //place first ship
  newBoard.placeShip(0, "y");
  expect(newBoard.getCoordinateStatus(0)).toEqual({
    isPlayed: false,
    shipIndex: 0,
  });

  expect(newBoard.getCoordinateStatus(2)).toEqual({
    isPlayed: false,
    shipIndex: null,
  });

  expect(newBoard.getCoordinateStatus(40)).toEqual({
    isPlayed: false,
    shipIndex: 0,
  });
});

it.skip("Place last ship vertically", () => {
  newBoard.placeShip(0, "y");
  newBoard.placeShip(1, "y");
  newBoard.placeShip(2, "y");
  newBoard.placeShip(3, "y");
  newBoard.placeShip(4, "y");
  newBoard.placeShip(5, "y");
  newBoard.placeShip(6, "y");
  expect(newBoard.getCoordinateStatus(6)).toEqual({
    isPlayed: false,
    shipIndex: 6,
  });

  expect(newBoard.getCoordinateStatus(7)).toEqual({
    isPlayed: false,
    shipIndex: null,
  });

  expect(newBoard.getCoordinateStatus(16)).toEqual({
    isPlayed: false,
    shipIndex: null,
  });
});

it.skip("Can't place ships on other ships", () => {
  newBoard.placeShip(0, "x");
  newBoard.placeShip(1, "y");
  expect(newBoard.getCoordinateStatus(11)).toEqual({
    isPlayed: false,
    shipIndex: null,
  });
  newBoard.placeShip(10, "x");
  expect(newBoard.getCoordinateStatus(10)).toEqual({
    isPlayed: false,
    shipIndex: 1,
  });
});

it.skip("Can't place ship in coordinates that will overflow grid horizontally", () => {
  newBoard.placeShip(6, "x");
  expect(newBoard.getCoordinateStatus(6)).toEqual({
    isPlayed: false,
    shipIndex: null,
  });
  newBoard.placeShip(6, "y");
  expect(newBoard.getCoordinateStatus(6)).toEqual({
    isPlayed: false,
    shipIndex: 0,
  });
});

it.skip("Can't place ship in coordinates that will overflow grid vertically", () => {
  newBoard.placeShip(60, "y");
  expect(newBoard.getCoordinateStatus(6)).toEqual({
    isPlayed: false,
    shipIndex: null,
  });
  newBoard.placeShip(60, "x");
  expect(newBoard.getCoordinateStatus(6)).toEqual({
    isPlayed: false,
    shipIndex: 0,
  });
});

it.skip("newBoard.receiveAttack Test -- receiveAttack misses", () => {
  newBoard.receiveAttack(0);
  expect(newBoard.getCoordinateStatus(0)).toEqual({
    isPlayed: true,
    shipIndex: null,
  });
});

it("Sinking ship publishes report", () => {
  placeAllShipHorizontally();
  attackShipPlacedHorizontally(0, 5);
  let sinkingReport;
  pubsub.subscribe("shipHasSunk", (data) => (sinkingReport = data));
  expect(sinkingReport).toEqual({
    shipId: 0,
    shipCoordinates: [0, 1, 2, 3, 4],
  });
  attackShipPlacedHorizontally(10, 4);
  expect(sinkingReport).toEqual({
    shipId: 2,
    shipCoordinates: [10, 11, 12, 13],
  });
});

it.skip("newBoard.isFleetSunk Test -- sinking all ship changes isFleetSunk", () => {
  placeAllShipHorizontally();
  expect(newBoard.isFleetSunk()).toBe(false);
  attackShipPlacedHorizontally(0, 5);
  attackShipPlacedHorizontally(10, 4);
  attackShipPlacedHorizontally(20, 3);
  attackShipPlacedHorizontally(30, 2);
  attackShipPlacedHorizontally(40, 2);
  attackShipPlacedHorizontally(50, 1);
  attackShipPlacedHorizontally(60, 1);
  expect(newBoard.isFleetSunk()).toBe(true);
});

it.skip("Attacking same locations does't sink ships", () => {
  placeAllShipHorizontally();
});
