/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // fill in first row
  // fill in first col
  // fill in the rest by adding left and top

  let height = grid.length;
  let width = grid[0].length;

  for (let row = 1; row < height; row++) {
    grid[row][0] += grid[row - 1][0];
  }

  for (let col = 1; col < width; col++) {
    grid[0][col] += grid[0][col - 1];
  }

  for (let row = 1; row < height; row++) {
    for (let col = 1; col < width; col++) {
      grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]);
    }
  }

  return grid[height - 1][width - 1];
};

let input = [[1, 3, 1], [1, 5, 1], [4, 2, 1]];
let actual = minPathSum(input);
let expected = 7;

console.log(`TEST PASSED: ${actual === expected} || Result: ${actual}`);

input = [[1, 3], [1, 5]];
actual = minPathSum(input);
expected = 7;

console.log(`TEST PASSED: ${actual === expected} || Result: ${actual}`);

input = [[2], [3]];
actual = minPathSum(input);
expected = 5;

console.log(`TEST PASSED: ${actual === expected} || Result: ${actual}`);

input = [[2, 3]];
actual = minPathSum(input);
expected = 5;

console.log(`TEST PASSED: ${actual === expected} || Result: ${actual}`);
