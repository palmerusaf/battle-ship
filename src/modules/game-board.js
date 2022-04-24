import { ShipFleet } from "./ship-fleet";
import { pubsub } from "./pubsub";

export function GameBoard() {
  const _grid = buildGrid(100);
  const _fleet = ShipFleet();
  let _shipsPlaced = 0;

  const getCoordinateStatus = (index) => _grid[index];

  const placeShip = (startingCoordinate, axis) => {
    const allShipsPlaced = _shipsPlaced === _fleet.length;
    const shipIndex = _shipsPlaced;
    const isIllegalPlacement = overFlowsGrid() || placedOnAnotherShip();
    if (allShipsPlaced) return;
    if (isIllegalPlacement) return;

    setShipCoordinates();
    updateGridWithShipIndex();
    _shipsPlaced++;

    function updateGridWithShipIndex() {
      const shipCoordinates = _fleet[shipIndex].getCoordinates();
      shipCoordinates.forEach(
        (coordinate) => (_grid[coordinate].shipIndex = shipIndex)
      );
    }

    function setShipCoordinates() {
      _fleet[shipIndex].setCoordinates(startingCoordinate, axis);
    }

    function overFlowsGrid() {
      const shipLength = _fleet[shipIndex].getLength();
      return overFlowsGridOnXAxis() || overFlowsGridOnYAxis();

      function overFlowsGridOnXAxis() {
        if (axis === "x") {
          const firstDigitOfStartingCoordinate = startingCoordinate % 10;
          return shipLength + firstDigitOfStartingCoordinate >= 10;
        } else return false;
      }

      function overFlowsGridOnYAxis() {
        if (axis === "y") {
          const endOfShipCoordinate =
            (shipLength - 1) * 10 + startingCoordinate;
          return endOfShipCoordinate >= _grid.length;
        } else return false;
      }
    }

    function placedOnAnotherShip() {
      return _grid[startingCoordinate].shipIndex !== "none";
    }
  };

  const receiveAttack = (coordinate) => {
    if (_grid[coordinate].isPlayed) return;
    _grid[coordinate].isPlayed = true;

    if (_grid[coordinate].shipIndex === "none") return;
    attackShip();

    function attackShip() {
      const shipIndex = _grid[coordinate].shipIndex;
      const shipToAttack = _fleet[shipIndex];
      shipToAttack.hit();

      if (shipToAttack.isSunk()) publishShipSinking();

      function publishShipSinking() {
        pubsub.publish("shipHasSunk", {
          shipCoordinates: shipToAttack.getCoordinates(),
          shipIndex: shipIndex,
        });
      }
    }
  };

  const isFleetSunk = () => _fleet.every((ship) => ship.isSunk());

  return {
    getCoordinateStatus,
    placeShip,
    receiveAttack,
    isFleetSunk,
  };
}

function buildGrid(size) {
  let grid = [];
  for (let i = 0; i < size; i++) {
    grid.push(newGridItem());
  }
  return grid;

  function newGridItem() {
    return { isPlayed: false, shipIndex: "none" };
  }
}
