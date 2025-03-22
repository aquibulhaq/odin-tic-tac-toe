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

  const printBoard = () => {
    const prettyBoard = board.map(row => row.map(cell => cell ?? ''));
    console.dir(prettyBoard);
  };

  return {
    getBoard,
    printBoard,
  };
})();
