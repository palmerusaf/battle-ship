import { GameBoard } from "../modules/game-board";
import { pubsub } from "../modules/pubsub";

let newBoard;
beforeEach(() => (newBoard = GameBoard()));

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

it("GameBoard.getCoordinateStatus Test -- returns all required info", () => {
  expect(newBoard.getCoordinateStatus(0)).toEqual({
    isPlayed: false,
    shipIndex: "none",
  });
  expect(newBoard.getCoordinateStatus(99)).toEqual({
    isPlayed: false,
    shipIndex: "none",
  });
  expect(newBoard.getCoordinateStatus(100)).toEqual(undefined);
});

describe("Ship placement tests", () => {
  it("Place first ship horizontally", () => {
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
      shipIndex: "none",
    });
  });

  it("Place last ship horizontally", () => {
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
      shipIndex: "none",
    });

    expect(newBoard.getCoordinateStatus(70)).toEqual({
      isPlayed: false,
      shipIndex: "none",
    });
  });

  it("Place first ship vertically", () => {
    //place first ship
    newBoard.placeShip(0, "y");
    expect(newBoard.getCoordinateStatus(0)).toEqual({
      isPlayed: false,
      shipIndex: 0,
    });

    expect(newBoard.getCoordinateStatus(2)).toEqual({
      isPlayed: false,
      shipIndex: "none",
    });

    expect(newBoard.getCoordinateStatus(40)).toEqual({
      isPlayed: false,
      shipIndex: 0,
    });
  });

  it("Place last ship vertically", () => {
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
      shipIndex: "none",
    });

    expect(newBoard.getCoordinateStatus(16)).toEqual({
      isPlayed: false,
      shipIndex: "none",
    });
  });

  it.skip("Can't place ships on other ships", () => {
    newBoard.placeShip(0, "x");
    newBoard.placeShip(1, "y");
    expect(newBoard.getCoordinateStatus(11)).toEqual({
      isPlayed: false,
      shipIndex: "none",
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
      shipIndex: "none",
    });
    newBoard.placeShip(6, "y");
    expect(newBoard.getCoordinateStatus(6)).toEqual({
      isPlayed: false,
      shipIndex: 0,
    });
  });

  it.skip("Can't place ship in coordinates that will overflow grid vertically", () => {
    newBoard.placeShip(60, "y");
    expect(newBoard.getCoordinateStatus(60)).toEqual({
      isPlayed: false,
      shipIndex: "none",
    });
    newBoard.placeShip(60, "x");
    expect(newBoard.getCoordinateStatus(60)).toEqual({
      isPlayed: false,
      shipIndex: 0,
    });
  });

  it("newBoard.isLegalShipPlacement Test -- if legal placement returns true", () => {
    expect(newBoard.isLegalShipPlacement(0, "x")).toBe(true);
  });

  it("newBoard.isLegalShipPlacement Test -- place ships on other ships returns false", () => {
    newBoard.placeShip(0, "x");
    expect(newBoard.isLegalShipPlacement(1, "y")).toBe(false);
  });

  it("newBoard.isLegalShipPlacement Test -- place ship in coordinates that will overflow grid horizontally returns false", () => {
    newBoard.placeShip(0, "x");
    expect(newBoard.isLegalShipPlacement(6, "x")).toBe(false);
    expect(newBoard.isLegalShipPlacement(6, "y")).toBe(true);
  });

  it("newBoard.isLegalShipPlacement Test -- place ship in coordinates that will overflow grid vertically returns false", () => {
    newBoard.placeShip(0, "x");
    expect(newBoard.isLegalShipPlacement(60, "y")).toBe(false);
    expect(newBoard.isLegalShipPlacement(60, "x")).toBe(true);
  });

  it.skip("newBoard.areAllShipsPlaced Test -- place no ships returns false", () => {
    expect(newBoard.areAllShipsPlaced()).toBe(false);
  });

  it.skip("newBoard.areAllShipsPlaced Test -- place one ship returns false", () => {
    newBoard.placeShip(0, "x");
    expect(newBoard.areAllShipsPlaced()).toBe(false);
  });

  it("newBoard.areAllShipsPlaced Test -- place all ships returns true", () => {
    newBoard.placeShip(0, "y");
    newBoard.placeShip(1, "y");
    newBoard.placeShip(2, "y");
    newBoard.placeShip(3, "y");
    newBoard.placeShip(4, "y");
    newBoard.placeShip(5, "y");
    newBoard.placeShip(6, "y");
    expect(newBoard.areAllShipsPlaced()).toBe(true);
  });
});

it("newBoard.receiveAttack Test -- receiveAttack misses", () => {
  newBoard.receiveAttack(0);
  expect(newBoard.getCoordinateStatus(0)).toEqual({
    isPlayed: true,
    shipIndex: "none",
  });
});

it("Sinking ship publishes report", () => {
  placeAllShipHorizontally();
  let sinkingReport;
  pubsub.subscribe("shipHasSunk", (data) => (sinkingReport = data));
  attackShipPlacedHorizontally(0, 5);
  expect(sinkingReport).toEqual({
    shipIndex: 0,
    shipCoordinates: [0, 1, 2, 3, 4],
  });
  attackShipPlacedHorizontally(10, 4);
  expect(sinkingReport).toEqual({
    shipIndex: 1,
    shipCoordinates: [10, 11, 12, 13],
  });
});

it("newBoard.isFleetSunk Test -- sinking all ship changes isFleetSunk", () => {
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

it("Attacking same locations does't sink ships", () => {
  placeAllShipHorizontally();
});
