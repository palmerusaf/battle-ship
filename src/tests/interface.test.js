import { Interface } from "../modules/interface";
import { Render } from "../modules/render";

jest.mock("../modules/render");

beforeEach(() => {
  jest.clearAllMocks();
});

it("startGameClick", () => {
  Interface.startGameClick();
  expect(Render.clearContent).toBeCalledTimes(1);
  expect(Render.shipPlacementScreen).toBeCalledTimes(1);
});

it.skip("flipShipClick", () => {
  fail;
});

it.skip("resetClick", () => {
  fail;
});

it.skip("continueClick", () => {
  Interface.continueClick();
  expect(Render.clearContent).toBeCalledTimes(1);
});

it.skip("placementGridClick", () => {
  fail;
});

it.skip("enemyGridClick", () => {
  fail;
});

it("playAgainClick", () => {
  Interface.playAgainClick();
  expect(Render.clearContent).toBeCalledTimes(1);
  expect(Render.titleScreen).toBeCalledTimes(1);
});
