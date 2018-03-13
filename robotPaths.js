const makeBoard = function(m, n) {
  const board = [];
  for (let i = 0; i < m; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }

  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };

  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };

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


const robotPaths = function(n, board = makeBoard(n, n), i = 0, j = 0) {
  if (board.isAtEnd(i, j)) { return 1; }
  // if (board.isOutOfBounds(i, j) || board.hasBeenVisited(i, j)) { return 0; }

  board.togglePiece(i, j);

  let result = 0;
  // result += robotPaths(n, board, i, j - 1);
  result += !board.isOutOfBounds(i, j - 1) && !board.hasBeenVisited(i, j - 1) ? robotPaths(n, board, i, j - 1) : null;
  // result += robotPaths(n, board, i, j + 1);
  result += !board.isOutOfBounds(i, j + 1) && !board.hasBeenVisited(i, j + 1) ? robotPaths(n, board, i, j + 1) : null;
  // result += robotPaths(n, board, i - 1, j);
  result += !board.isOutOfBounds(i - 1, j) && !board.hasBeenVisited(i - 1, j) ? robotPaths(n, board, i - 1, j) : null;
  // result += robotPaths(n, board, i + 1, j);
  result += !board.isOutOfBounds(i + 1, j) && !board.hasBeenVisited(i + 1, j) ? robotPaths(n, board, i + 1, j) : null;

  board.togglePiece(i, j);
  return result;
};

// let testBoard = makeBoard(5);
console.log(robotPaths(3)); // 8512
