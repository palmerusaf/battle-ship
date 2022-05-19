import { GameBoard } from "../modules/game-board";
import { pubsub } from "../modules/pubsub";

let newBoard;
beforeEach(() => (newBoard = GameBoard("Player")));

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

describe("toggle and get for placementAxis", () => {
  it("newBoard.getPlacementAxis Test -- axis defaults to x", () => {
    expect(newBoard.getPlacementAxis()).toBe("x");
  });

  it("togglePlacementAxis Test -- togglePlacementAxis changes axis", () => {
    newBoard.togglePlacementAxis();
    expect(newBoard.getPlacementAxis()).toBe("y");
    newBoard.togglePlacementAxis();
    expect(newBoard.getPlacementAxis()).toBe("x");
  });

  it("togglePlacementAxis changes how ships are placed", () => {
    newBoard.togglePlacementAxis();
    newBoard.placeShip(0);
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
});

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

  it("newBoard.isIllegalShipPlacement Test -- if legal placement returns false", () => {
    expect(newBoard.isIllegalShipPlacement(0, "x")).toBe(false);
  });

  it("newBoard.isIllegalShipPlacement Test -- place ships on other ships returns true", () => {
    newBoard.placeShip(0, "x");
    expect(newBoard.isIllegalShipPlacement(1, "y")).toBe(true);
  });

  it("newBoard.isIllegalShipPlacement Test -- place ship in coordinates that will overflow grid horizontally returns true", () => {
    expect(newBoard.isIllegalShipPlacement(6, "x")).toBe(true);
    expect(newBoard.isIllegalShipPlacement(6, "y")).toBe(false);
  });

  it("newBoard.isIllegalShipPlacement Test -- place ship in coordinates that will overflow grid vertically returns true", () => {
    expect(newBoard.isIllegalShipPlacement(60, "y")).toBe(true);
    expect(newBoard.isIllegalShipPlacement(70, "y")).toBe(true);
    expect(newBoard.isIllegalShipPlacement(60, "x")).toBe(false);
  });

  it("newBoard.areAllShipsPlaced Test -- place no ships returns false", () => {
    expect(newBoard.areAllShipsPlaced()).toBe(false);
  });

  it("newBoard.areAllShipsPlaced Test -- place one ship returns false", () => {
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

  it("resetPlacement resets one ship placed", () => {
    newBoard.placeShip(0, "x");
    expect(newBoard.getCoordinateStatus(0)).toEqual({
      isPlayed: false,
      shipIndex: 0,
    });
    newBoard.resetPlacement();
    expect(newBoard.getCoordinateStatus(0)).toEqual({
      isPlayed: false,
      shipIndex: "none",
    });
  });

  it("resetPlacement resets all ships placed", () => {
    placeAllShipHorizontally();
    newBoard.resetPlacement();
    expect(newBoard.getCoordinateStatus(0)).toEqual({
      isPlayed: false,
      shipIndex: "none",
    });
    expect(newBoard.getCoordinateStatus(10)).toEqual({
      isPlayed: false,
      shipIndex: "none",
    });
    expect(newBoard.getCoordinateStatus(20)).toEqual({
      isPlayed: false,
      shipIndex: "none",
    });
    expect(newBoard.getCoordinateStatus(30)).toEqual({
      isPlayed: false,
      shipIndex: "none",
    });
    expect(newBoard.getCoordinateStatus(40)).toEqual({
      isPlayed: false,
      shipIndex: "none",
    });
    expect(newBoard.getCoordinateStatus(50)).toEqual({
      isPlayed: false,
      shipIndex: "none",
    });
    expect(newBoard.getCoordinateStatus(60)).toEqual({
      isPlayed: false,
      shipIndex: "none",
    });
  });
});

it("placeAllShipsAtRandomCoordinates causes areAllShipsPlaced to return true", () => {
  expect(newBoard.areAllShipsPlaced()).toBe(false);
  newBoard.placeAllShipsAtRandomCoordinates();
  expect(newBoard.areAllShipsPlaced()).toBe(true);
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
    startingCoordinate: 0,
    playerName: "Player",
    axis: "x",
  });
  attackShipPlacedHorizontally(10, 4);
  expect(sinkingReport).toEqual({
    shipIndex: 1,
    startingCoordinate: 10,
    playerName: "Player",
    axis: "x",
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
