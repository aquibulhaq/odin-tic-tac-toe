'use strict';

const gameBoard = (function () {
  const N = 3;

  const board = [];
  for (let i = 0; i < N; ++i) {
    board[i] = [];
    for (let j = 0; j < N; ++j)
      board[i].push(null);
  }

  let numEmptyCells = N * N;

  const getBoard = () => board;

  const getNumEmptyCells = () => numEmptyCells;

  const isThreeInARow = (startRow, startColumn, dRow, dColumn) => {
    for (
      let r = startRow + dRow, c = startColumn + dColumn;
      r >= 0 && r < N && c >= 0 && c < N;
      r += dRow, c += dColumn
    ) {
      if (board[r - dRow][c - dColumn] === null || board[r - dRow][c - dColumn] !== board[r][c])
        return false;
    }
    return true;
  };

  const findThreeInARow = () => {
    // Look for three of a kind along each row
    for (let r = 0; r < N; ++r) {
      if (isThreeInARow(r, 0, 0, +1))
        return board[r][0];
    }

    // Look for three of a kind along each column
    for (let c = 0; c < N; ++c) {
      if (isThreeInARow(0, c, +1, 0))
        return board[0][c];
    }

    // Look for three of a kind along each diagonal
    if (isThreeInARow(0, 0, +1, +1))
      return board[0][0];

    if (isThreeInARow(2, 0, -1, +1))
      return board[2][0];

    return null;
  };

  const reset = () => {
    numEmptyCells = N * N;

    for (let i = 0; i < N; ++i) {
      for (let j = 0; j < N; ++j)
        board[i][j] = null;
    }
  };

  const markCell = (row, column, marker) => {
    if (board[row][column] !== null)
      return null;

    --numEmptyCells;
    return board[row][column] = marker;
  };

  const printBoard = () => {
    const prettyBoard = board.map(row => row.map(cell => cell ?? ''));
    console.dir(prettyBoard);
  };

  return {
    getBoard,
    getNumEmptyCells,
    findThreeInARow,
    reset,
    markCell,
    printBoard,
  };
})();

function Player(name, marker) {
  return { name, marker };
}

const players = [
  Player('Player 1', 'X'),
  Player('Player 2', 'O'),
];

const gameController = (function (
  gameBoard,
  players,
) {
  let activePlayerIndex = 0;

  return {

  };
})(
  gameBoard,
  players,
);
