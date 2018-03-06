/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeroes = function(nums) {
  let zeroIndex = null;

  const findZero = function(lastZeroIndex) {
    for (let i = lastZeroIndex; i < nums.length; i++) {
      if (nums[i] === 0) {
        zeroIndex = i;
        break;
      }
    }
  };

  findZero(0);

  for (let i = 0; i < nums.length; i++) {
    if (zeroIndex !== null && i > zeroIndex && nums[i] !== 0) {
      [nums[zeroIndex], nums[i]] = [nums[i], nums[zeroIndex]];
      findZero(zeroIndex);
    }
  }
};

