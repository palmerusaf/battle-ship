import { ShipFleet } from "../modules/ship-fleet";

const newFleet = ShipFleet();

it("newFleet.length Test -- correct number of ships", () => {
  expect(newFleet.length).toBe(7);
});

it("correct length ships in correct indexes", () => {
  const shipLengths = newFleet.map((ship) => ship.getLength());
  expect(shipLengths).toEqual([5, 4, 3, 2, 2, 1, 1]);
});
