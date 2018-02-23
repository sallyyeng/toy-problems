
const spiralTraversal = (matrix) => {
  // keep track of min and max row and column
  let returnArr = [];
  let minRow = 0;
  let maxRow = matrix.length - 1;
  let minCol = 0;
  let maxCol = matrix[0].length - 1;
  let i;

  // while min <  max
  while (minRow <= maxRow && minCol <= maxCol) {
    // move R, D and push values to array
    for (i = minCol; i <= maxCol; i++) {
      returnArr.push(matrix[minRow][i]);
    }
    minRow++;

    for (i = minRow; i <= maxRow; i++) {
      returnArr.push(matrix[i][maxCol]);
    }
    maxCol--;

    // if min < max after moving R and D...
    if (minRow <= maxRow) {
      // move L U and push values to array
      for (i = maxCol; i >= minCol; i--) {
        returnArr.push(matrix[maxRow][i]);
      }
      maxRow--;
    }

    if (minCol <= maxCol) {
      for (i = maxRow; i >= minRow; i--) {
        returnArr.push(matrix[i][minCol]);
      }
      minCol++;
    }

  }
  return returnArr;
};
