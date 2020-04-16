/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  n = String(n);

  let product = Array.from(n, x => Number(x)).reduce(
    (accum, currVal) => accum * currVal
  );
  let sum = Array.from(n, x => Number(x)).reduce(
    (accum, currVal) => accum + currVal
  );

  return product - sum;
};

const input = 234;
// output = 15;

const result = subtractProductAndSum(input);
console.log("result: ", result);
