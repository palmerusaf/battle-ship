import { Ship } from "../modules/ship";

it("Ship().getLength Test -- Get length", () => {
  expect(Ship(5).getLength()).toBe(5);
  expect(Ship(4).getLength()).toBe(4);
  expect(Ship(3).getLength()).toBe(3);
  expect(Ship(1).getLength()).toBe(1);
});

it("newShip.isSunk Test -- hit and sunk test", () => {
  const newShip = Ship(2);
  expect(newShip.isSunk()).toBe(false);
  newShip.hit();
  expect(newShip.isSunk()).toBe(false);
  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
  expect(newShip.getLength()).toBe(2);
});

it("Set ship location horizontally Test 1", () => {
  const newShip = Ship(5);
  newShip.setCoordinates(0, "x");
  expect(newShip.getCoordinates()).toEqual([0, 1, 2, 3, 4]);
});

it("Set ship location horizontally Test 2", () => {
  const newShip = Ship(4);
  newShip.setCoordinates(10, "x");
  expect(newShip.getCoordinates()).toEqual([10, 11, 12, 13]);
});

it("Set ship location vertically Test 1", () => {
  const newShip = Ship(5);
  newShip.setCoordinates(1, "y");
  expect(newShip.getCoordinates()).toEqual([1, 11, 21, 31, 41]);
});

it("Set ship location vertically Test 2", () => {
  const newShip = Ship(4);
  newShip.setCoordinates(9, "y");
  expect(newShip.getCoordinates()).toEqual([9, 19, 29, 39]);
});

it("checkCoordinate Test -- checkCoordinates returns a list of hypothetical coordinates", () => {
  const newShip = Ship(4);
  expect(newShip.checkCoordinates(9, "y")).toEqual([9, 19, 29, 39]);
});

it("checkCoordinate Test -- checkCoordinates doesn't setCoordinates of Ship", () => {
  const newShip = Ship(4);
  newShip.checkCoordinates(9, "y");
  expect(newShip.getCoordinates()).toEqual([]);
});
