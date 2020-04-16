/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];
  const firstRow = [1];
  const secondRow = [1, 1];
  if (numRows === 0) return result;
  if (numRows === 1) return [firstRow];
  if (numRows === 2) return [firstRow, secondRow];

  result = [firstRow, secondRow];

  const recurse = row => {
    if (result.length === numRows) return;

    let nextRow = [];

    for (let i = 0; i <= row; i++) {
      if (i === 0 || i === row) {
        nextRow.push(1);
      } else {
        let prevRow = result[row - 1];
        let nextVal = prevRow[i] + prevRow[i - 1];
        nextRow.push(nextVal);
      }
    }

    result.push(nextRow);
    row += 1;
    recurse(row);
  };

  recurse(2);

  return result;
};
