import { ShipFleet } from "./ship-fleet";

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
    function calculateEndPositionOfShip() {
      if (axis === "y") {
      }
    }
  };

  return {
    getCoordinateStatus,
    placeShip,
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
