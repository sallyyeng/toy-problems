/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // make board
  const initRow = new Array(n).fill(0);
  const board = new Array(m).fill(initRow);

  // fill first row and first col with 1s
  for (let row = 0; row < m; row++) {
    board[row][0] = 1;
  }

  // for the remaining squares, calculate value
  for (let col = 0; col < n; col++) {
    board[0][col] = 1;
  }

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      let leftSquareVal = board[row][col - 1];
      let topSqaureVal = board[row - 1][col];

      board[row][col] = leftSquareVal + topSqaureVal;
    }
  }

  // return last square value
  return board[m - 1][n - 1];
};

console.log("result: ", uniquePaths(2, 2)); // 7
// console.log("result: ", uniquePaths(7, 3)); // 28
// console.log("result: ", uniquePaths(7, 4)); // 84

// ******* BETTER SOLUTION ON THE BOTTOM ******* //
// Really really fast solution that creates only one row
// initiated with all 1s and instead of adding left + top
// you add left + yourself because you only need reference
// to top (i.e. yourself) for the adding and then
// you can override yourself and become the "new" top for the next row

// /**
//  * @param {number} m
//  * @param {number} n
//  * @return {number}
//  */
// var uniquePaths = function(numRows, numCols) {
//   let storage = new Array(numCols).fill(1);

//   for (let row = 1; row < numRows; row++) {
//     for (let col = 1; col < numCols; col++) {
//       storage[col] += storage[col - 1];
//     }
//   }

//   return storage[numCols - 1];
// };
