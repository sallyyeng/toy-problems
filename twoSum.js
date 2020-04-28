/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // iterate through nums
  // find diff between target and curr value
  // if diff exists in map, return [value of diff, index]
  // if diff doesn't exist, add to map [currVal, index]

  let diffMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let currVal = nums[i];
    let diff = target - currVal;

    if (diffMap.has(diff)) {
      return [diffMap.get(diff), i];
    } else {
      diffMap.set(currVal, i);
    }
  }
};

// let inputTarget = 9;
// let inputArr = [2, 7, 11, 15]; // [0, 1]

let inputTarget = 33;
let inputArr = [-4, -5, 1, 99, 32, 3, 22]; // [0, 1]

console.log("result: ", twoSum(inputArr, inputTarget));
