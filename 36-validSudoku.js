var isValidSudoku = function(board) {
  const seenPathMap = new Map();

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const currVal = board[row][col];

      if (currVal === ".") continue;

      const rowKey = `row${row}`;
      const colKey = `col${col}`;
      const boxKey = `box${Math.floor(row / 3)}-${Math.floor(col / 3)}`;

      if (!seenPathMap.has(rowKey)) seenPathMap.set(rowKey, new Set());
      if (!seenPathMap.has(colKey)) seenPathMap.set(colKey, new Set());
      if (!seenPathMap.has(boxKey)) seenPathMap.set(boxKey, new Set());

      if (
        seenPathMap.get(rowKey).has(currVal) ||
        seenPathMap.get(colKey).has(currVal) ||
        seenPathMap.get(boxKey).has(currVal)
      )
        return false;

      seenPathMap.get(rowKey).add(currVal);
      seenPathMap.get(colKey).add(currVal);
      seenPathMap.get(boxKey).add(currVal);
    }
  }

  return true;
};

let input, actual, expected;

input = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."]
];
expected = false;
actual = isValidSudoku(input);
console.log(`TEST PASSED: ${actual === expected} | RESULT: ${actual}`);

input = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
expected = true;
actual = isValidSudoku(input);
console.log(`TEST PASSED: ${actual === expected} | RESULT: ${actual}`);

input = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
expected = false;
actual = isValidSudoku(input);
console.log(`TEST PASSED: ${actual === expected} | RESULT: ${actual}`);
