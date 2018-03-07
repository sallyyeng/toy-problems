/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function(x, y) {
  const diff = (x ^ y).toString(2);
  let counter = 0;

  for (let i in diff) {
    diff[i] === '1' ? counter++ : null;
  }
  return counter;
};

