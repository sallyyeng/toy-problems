function isOverlapped([s1, e1], [s2, e2]) {
  // comparing diagonals
  return s1 <= e2 && e1 >= s2;
}

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  let result = [];
  let pointerA = 0;
  let pointerB = 0;

  while (pointerA < A.length && pointerB < B.length) {
    const [startA, endA] = A[pointerA];
    const [startB, endB] = B[pointerB];

    if (isOverlapped(A[pointerA], B[pointerB])) {
      let overlapRange = [Math.max(startA, startB), Math.min(endA, endB)];
      result.push(overlapRange);
    }

    // find the next array to compare by
    // comparing the current array's end indexes
    if (endA > endB) {
      pointerB++;
    } else {
      pointerA++;
    }
  }

  return result;
};

const inputA = [
  [0, 2],
  [5, 10],
  [13, 23],
  [24, 25]
];
const inputB = [
  [1, 5],
  [8, 12],
  [15, 24],
  [25, 26]
];

// answer [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

console.log("result: ", intervalIntersection(inputA, inputB));
