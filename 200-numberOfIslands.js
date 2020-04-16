/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islandCount = 0;

  if (grid.length === 0 || grid[0].length === 0) {
    return islandCount;
  }

  let rowSize = grid.length;
  let colSize = grid[0].length;

  const isOutOfBounds = (rowIndex, colIndex) =>
    rowIndex < 0 || rowIndex >= rowSize || colIndex < 0 || colIndex >= colSize;
  const isWaterOrSeen = (rowIndex, colIndex) =>
    grid[rowIndex][colIndex] === "0";
  const markAsVisited = (rowIndex, colIndex) =>
    (grid[rowIndex][colIndex] = "0");

  const markAttachedIslands = (rowIndex, colIndex) => {
    if (isOutOfBounds(rowIndex, colIndex)) return;
    if (isWaterOrSeen(rowIndex, colIndex)) return;

    markAsVisited(rowIndex, colIndex);

    markAttachedIslands(rowIndex + 1, colIndex);
    markAttachedIslands(rowIndex - 1, colIndex);
    markAttachedIslands(rowIndex, colIndex + 1);
    markAttachedIslands(rowIndex, colIndex - 1);
  };

  grid.forEach((row, rowIndex) => {
    row.forEach((gridSpace, colIndex) => {
      if (gridSpace === "1") {
        islandCount++;
        markAsVisited(rowIndex, colIndex);

        markAttachedIslands(rowIndex + 1, colIndex);
        markAttachedIslands(rowIndex - 1, colIndex);
        markAttachedIslands(rowIndex, colIndex + 1);
        markAttachedIslands(rowIndex, colIndex - 1);
      }
    });
  });

  return islandCount;
};

let input = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];

let inputB = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
];

let inputC = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];

const result = numIslands(inputC);
console.log("result: ", result);
