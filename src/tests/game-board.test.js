import { GameBoard } from "../modules/game-board";

const newBoard = GameBoard();

it("GameBoard.getCoordinateStatus Test -- returns all required info", () => {
  expect(newBoard.getCoordinateStatus(0)).toEqual({
    isPlayed,
    shipIndex,
  });
});

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
    shipIndex: null,
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
    shipIndex: null,
  });

  expect(newBoard.getCoordinateStatus(70)).toEqual({
    isPlayed: false,
    shipIndex: null,
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
    shipIndex: null,
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
    shipIndex: null,
  });

  expect(newBoard.getCoordinateStatus(16)).toEqual({
    isPlayed: false,
    shipIndex: null,
  });
});

it("Can't place ships on other ships", () => {
  newBoard.placeShip(0, "x");
  newBoard.placeShip(1, "y");
  expect(newBoard.getCoordinateStatus(11)).toEqual({
    isPlayed: false,
    shipIndex: null,
  });
  newBoard.placeShip(10,'x')
  expect(newBoard.getCoordinateStatus(10)).toEqual({
    isPlayed: false,
    shipIndex: 1,
  });
});

it("Can't place ship in coordinates that will overflow grid horizontally", () => {
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

it("Can't place ship in coordinates that will overflow grid vertically", () => {
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
