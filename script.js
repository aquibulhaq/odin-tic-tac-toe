'use strict';

const gameBoard = (function () {
  const N = 3;

  const board = [];
  for (let i = 0; i < N; ++i) {
    board[i] = [];
    for (let j = 0; j < N; ++j)
      board[i].push(null);
  }

  const getBoard = () => board;

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

  const reset = () => {
    for (let i = 0; i < N; ++i) {
      for (let j = 0; j < N; ++j)
        board[i][j] = null;
    }
  };

  const markCell = (row, column, marker) => {
    if (board[row][column] !== null)
      return null;
    else
      return board[row][column] = marker;
  };

  const printBoard = () => {
    const prettyBoard = board.map(row => row.map(cell => cell ?? ''));
    console.dir(prettyBoard);
  };

  return {
    getBoard,
    reset,
    markCell,
    printBoard,
  };
})();
