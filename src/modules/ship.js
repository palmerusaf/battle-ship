export function Ship(length) {
  let hitPoints = length;
  let sunk = false;
  let coordinates = [];
  let _axis = "";

  return {
    isSunk: () => sunk,
    getLength: () => length,
    getCoordinates: () => coordinates,
    getStartingCoordinate: () => coordinates[0],
    getAxis: () => _axis,

    hit: () => {
      hitPoints--;
      if (hitPoints === 0) sunk = true;
    },

    setCoordinates: (pStartingPosition, pAxis) => {
      _axis = pAxis;
      for (let i = 0; i < length; i++) {
        if (pAxis === "y") coordinates.push(pStartingPosition + i * 10);
        else coordinates.push(pStartingPosition + i);
      }
    },
    resetCoordinates: () => (coordinates = []),
  };
}
