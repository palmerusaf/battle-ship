export function Ship(length) {
  let hitPoints = length;
  let sunk = false;
  let coordinates = [];

  return {
    isSunk: () => sunk,
    getLength: () => length,
    getCoordinates: () => coordinates,

    hit: () => {
      hitPoints--;
      if (hitPoints === 0) sunk = true;
    },

    setCoordinates: (startingPosition, axis) => {
      for (let i = 0; i < length; i++) {
        if (axis === "y") coordinates.push(startingPosition + i * 10);
        else coordinates.push(startingPosition + i);
      }
    },
  };
}
