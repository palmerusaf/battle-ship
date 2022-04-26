import { ShipFleet } from "./ship-fleet";
import { pubsub } from "./pubsub";

const GRID_SIZE = 100;
export function GameBoard() {
  const _grid = buildGrid(GRID_SIZE);
  const _fleet = ShipFleet();
  let _shipsPlaced = 0;

  const getCoordinateStatus = (index) => _grid[index];

  const placeShip = (startingCoordinate, axis) => {
    const shipIndex = _shipsPlaced;

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
  };

  const isIllegalShipPlacement = (startingCoordinate, axis) => {
    const shipIndex = _shipsPlaced;
    return overFlowsGrid() || placedOnAnotherShip();

    function overFlowsGrid() {
      const shipLength = _fleet[shipIndex].getLength();
      return overFlowsGridOnXAxis() || overFlowsGridOnYAxis();

      function overFlowsGridOnXAxis() {
        if (axis !== "x") return false;
        const firstDigitOfStartingCoordinate = startingCoordinate % 10;
        return shipLength + firstDigitOfStartingCoordinate >= 10;
      }

      function overFlowsGridOnYAxis() {
        if (axis !== "y") return false;
        const endOfShipCoordinate = (shipLength - 1) * 10 + startingCoordinate;
        return endOfShipCoordinate >= _grid.length;
      }
    }

    function placedOnAnotherShip() {
      return _grid[startingCoordinate].shipIndex !== "none";
    }
  };
  const areAllShipsPlaced = () => {
    return _shipsPlaced === _fleet.length;
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
    isIllegalShipPlacement,
    areAllShipsPlaced,
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
