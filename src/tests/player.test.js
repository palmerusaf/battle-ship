import { Player } from "../modules/player";
import { GameBoard } from "../modules/game-board";

let user;
let userGameBoard;
let computer;
let computerGameBoard;
beforeEach(() => {
  user = Player();
  userGameBoard = GameBoard();
  computer = Player();
  computerGameBoard = GameBoard();
});

it("playGameBoard updates GameBoard", () => {
  let isPlayed = computerGameBoard.getCoordinateStatus(0).isPlayed;
  expect(isPlayed).toBe(false);

  user.playGameBoard(computerGameBoard, 0);

  isPlayed = computerGameBoard.getCoordinateStatus(0).isPlayed;
  expect(isPlayed).toBe(true);
});

it("isLegalPlay returns true if coordinate not played before", () => {
  expect(user.isLegalPlay(computerGameBoard, 4)).toBe(true);
});

it("isLegalPlay returns false if coordinate played before", () => {
  user.playGameBoard(computerGameBoard, 4);
  expect(user.isLegalPlay(computerGameBoard, 4)).toBe(false);
});

it("isLegalPlay returns false if not player's turn", () => {
  user.setIsTurn(false);
  expect(user.isLegalPlay(computerGameBoard, 0)).toBe(false);
});

it("isLegalPlay returns false if coordinate outside game board grid", () => {
  expect(user.isLegalPlay(computerGameBoard, 100)).toBe(false);
  expect(user.isLegalPlay(computerGameBoard, 101)).toBe(false);
});

it("createLegalPlayAtRandom causes isLegalPLay to return true for first play", () => {
  const play = computer.createLegalPlayAtRandom(userGameBoard);
  expect(computer.isLegalPlay(userGameBoard, play)).toBe(true);
});

it("createLegalPlayAtRandom causes isLegalPLay to return true for last play", () => {
  const GRID_SIZE = 100;
  for (let i = 0; i < GRID_SIZE - 1; i++) {
    let play = computer.createLegalPlayAtRandom(userGameBoard);
    computer.playGameBoard(userGameBoard, play);
  }

  let play = computer.createLegalPlayAtRandom(userGameBoard);
  expect(computer.isLegalPlay(userGameBoard, play)).toBe(true);
});
