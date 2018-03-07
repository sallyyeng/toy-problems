/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  if (nums.length % 2 !== 0) { return; }
  nums.sort(function(a, b) { return a - b; });

  return nums.reduce((accum = 0, currVal, i) => {
    i === 0 || i % 2 === 0 ? accum += currVal : null;
    return accum;
  });
};


console.log(arrayPairSum([1,4,3,2]));
