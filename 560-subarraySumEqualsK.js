/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// The sum between i and j equals sum of 0 to j minus sum of 0 to i.
var subarraySum = function(nums, target) {
  let sumMap = new Map([[0, 1]]);
  let cummulativeSum = 0;
  let result = 0;

  nums.forEach(num => {
    cummulativeSum += num;

    // calculate diff of cummulative sum and target
    // if you've seen this diff before, that means
    // you've found a subarray with a sum of target
    // explanation at top of function should help
    let diff = cummulativeSum - target;
    if (sumMap.has(diff)) {
      result += sumMap.get(diff);
    }

    // create hash map of all cummulative sums and # times seen (count)
    sumMap.set(cummulativeSum, (sumMap.get(cummulativeSum) || 0) + 1);
  });

  return result;
};

let arr = [1, 0, 1, 2, 1, 0, 1, 2, 0, 0, 3];
let target = 3;
let expected = 13;

console.log("test result: ", subarraySum(arr, target) === expected);

arr = [-1, -1, 1];
target = 0;
expected = 1;

console.log("test result: ", subarraySum(arr, target) === expected);

arr = [28, 54, 7, -70, 22, 65, -6];
100;
target = 100;
expected = 1;

console.log("test result: ", subarraySum(arr, target) === expected);

arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  1,
  23,
  21,
  3,
  1,
  2,
  1,
  1,
  1,
  1,
  1,
  12,
  2,
  3,
  2,
  3,
  2,
  2
];
target = 1;
expected = 8;

console.log("test result: ", subarraySum(arr, target) === expected);
