export function Ship(length) {
  let hitPoints = length;
  let sunk = false;

  return {
    getLength: () => length,
    isSunk: () => sunk,
    hit: () => {
      hitPoints--;
      if (hitPoints === 0) sunk = true;
    },
  };
}
