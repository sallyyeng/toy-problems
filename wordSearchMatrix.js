
const makeFalseBoard = (r, c) => {
  const board = [];
  for (let i = 0; i < r; i++) {
    board.push([]);
    for (let j = 0; j < c; j++) {
      board[i].push(false);
    }
  }

  board.togglePiece = function(x, y) {
    this[x][y] = !this[x][y];
  };

  board.hasBeenVisited = function(x, y) {
    return !!this[x][y];
  };

  board.isOutOfBounds = function(x, y) {
    return (x < 0 || y < 0 || x >= r || y >= c);
  };

  return board;
};

let inputBoard = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];

const isInMatrix = (str) => {
  let r = inputBoard.length;
  let c = inputBoard[0].length;
  let pathTrackerBoard = makeFalseBoard(r, c);
  let result = false;

  // helper to check if path starting at (x, y) spells out word
  const recurse = (x, y, index = 0) => {
    let currInputLetter = str[index];
    let currentTile = inputBoard[x][y];

    // if we are at last index of word and the letter matches the value, return true
    if (index === str.length - 1 && currInputLetter === currentTile) {
      result = true;
    }

    // if letter does not match value, return
    if (currInputLetter !== currentTile) { return; }

    // otherwise, we landed on the 'next' letter so toggle piece
    pathTrackerBoard.togglePiece(x, y);

    // if going to next tile IS NOT outOfBounds and NOT hasBeenVisited, then go
    if (!pathTrackerBoard.isOutOfBounds(x, y - 1) && !pathTrackerBoard.hasBeenVisited(x, y - 1)) { recurse(x, y - 1, index + 1); }
    if (!pathTrackerBoard.isOutOfBounds(x + 1, y) && !pathTrackerBoard.hasBeenVisited(x + 1, y)) { recurse(x + 1, y, index + 1); }
    if (!pathTrackerBoard.isOutOfBounds(x, y + 1) && !pathTrackerBoard.hasBeenVisited(x, y + 1)) { recurse(x, y + 1, index + 1); }
    if (!pathTrackerBoard.isOutOfBounds(x - 1, y) && !pathTrackerBoard.hasBeenVisited(x - 1, y)) { recurse(x - 1, y, index + 1); }

    // when path is finished, untoggle and reset board
    pathTrackerBoard.togglePiece(x, y);
  };

  // for every position in the board, check if any paths spell out given word
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      recurse(i, j);
    }
  }

  return result;
};

const assert = function(expectedBehavior, descriptionOfCorrectBehavior) {
  if (!expectedBehavior) {
    console.log(descriptionOfCorrectBehavior)
  } else {
    console.log('test passed');
  }
};

assert(isInMatrix('ASADB') === false, 'Input str is not in matrix, should return false');
assert(isInMatrix('') === false, 'Input str is not in matrix, should return false');
assert(isInMatrix('AFE') === false, 'Input str is in matrix, should return true');
assert(isInMatrix('ABCCED') === true, 'Input str is in matrix, should return true');
assert(isInMatrix('ASADEESECB') === true, 'Input str is in matrix, should return true');
assert(isInMatrix('ABCE') === true, 'Input str is in matrix, should return true');







