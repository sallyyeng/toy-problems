/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(arr) {
  let isConsistentSwitch = true;
  let isAsc;
  let pointer = 1;

  while (isConsistentSwitch && pointer < arr.length) {
    const currNum = arr[pointer];
    const prevNum = arr[pointer - 1];

    if (currNum !== prevNum) {
      if (isAsc === undefined) {
        isAsc = prevNum < currNum ? true : false;
      } else {
        if ((isAsc && prevNum > currNum) || (!isAsc && prevNum < currNum)) {
          isConsistentSwitch = false;
        }
      }
    }

    pointer++;
  }

  return isConsistentSwitch;
};

const runTest = (actual, expected) => {
  console.log("test status: ", actual === expected ? "PASSED" : "FAILED");
};

let input = [3, 2, 3, 2, 4];
let expected = false;
runTest(isMonotonic(input), expected);

input = [1, 2, 2, 3];
expected = true;
runTest(isMonotonic(input), expected);

input = [6, 5, 4, 4];
expected = true;
runTest(isMonotonic(input), expected);

input = [1, 3, 2];
expected = false;
runTest(isMonotonic(input), expected);

input = [1, 2, 4, 5];
expected = true;
runTest(isMonotonic(input), expected);

input = [1, 1, 1];
expected = true;
runTest(isMonotonic(input), expected);
