import battleship from "../imgs/battleship.png";
import carrier from "../imgs/carrier.png";
import cruiser from "../imgs/cruiser.png";
import destroyer from "../imgs/destroyer.png";
import submarine from "../imgs/submarine.png";

export function getShipImgFromIndex(index) {
  if (index === 0) return carrier;
  if (index === 1) return battleship;
  if (index === 2) return cruiser;
  if (index === 3 || index === 4) return destroyer;
  if (index === 5 || index === 6) return submarine;
}
