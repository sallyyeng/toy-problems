/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let found = false;

  const dfsHelper = (board, row, col, count) => {
    if (count === word.length) return true;
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) {
      return false;
    }
    if (board[row][col] !== word.charAt(count)) return false;

    const temp = board[row][col];
    board[row][col] = "";

    const found =
      dfsHelper(board, row + 1, col, count + 1) ||
      dfsHelper(board, row - 1, col, count + 1) ||
      dfsHelper(board, row, col + 1, count + 1) ||
      dfsHelper(board, row, col - 1, count + 1);

    if (found) {
      return true;
    } else {
      board[row][col] = temp;
      return false;
    }
  };

  board.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col === word.charAt(0) && dfsHelper(board, rowIndex, colIndex, 0)) {
        found = true;
      }
    });
  });

  return found;
};

const inputBoard = (board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
]);
// const matchingString = "ABCCED"; // true
// const matchingString = "SEE"; // true
const matchingString = "ABCB"; // false

console.log("result: ", exist(inputBoard, matchingString));
