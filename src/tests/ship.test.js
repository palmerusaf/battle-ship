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
