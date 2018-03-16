/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A.length !== B.length) { return false; }
  let bIndexes = [];

  B.split('').forEach((letter, i) => {
    letter === A[0] ? bIndexes.push(i) : null;
  });

  if (bIndexes.length === 0) { return false; }

  for (let index of bIndexes) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[index]) {
        break;
      } else if (i === A.length - 1 && A[i] === B[index]) {
        return true;
      }
      index = index + 1 === A.length ? 0 : index + 1;
    }
  }
  return false;
};
