/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

const makeBoard = function(m, n) {
  const board = [];
  for (let i = 0; i < m; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }

  board.isAtEnd = function(i, j) {
    // console.log(`i: ${m-1}`)
    // console.log(`j: ${n-1}`)
    return i === m - 1 && j === n - 1;
  };

  board.isOutOfBounds = function(i, j) {
    // if row or column < 0 or > grid.length - 1 return true else false
    return (i < 0 || j < 0 || i >= m || j >= n);
  };

  return board;
};

const uniquePaths = function(m, n) {
  let paths = 0;
  let board = makeBoard(m, n);

  recurse = (i, j) => {

    // base case: if step is the end, increment counter and reset to beginning
    if (board.isAtEnd(i, j)) {
      paths++;
      return;
    }

    // base case: step is outOfBounds or hasBeenVisited
    if (board.isOutOfBounds(i, j)) { return; }

    // move r and d
    recurse(i, j + 1);
    recurse(i + 1, j);
  };
  recurse(0, 0);
  return paths;
};
