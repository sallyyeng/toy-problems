
// time: O(n) + O(1) * m
// space: O(1)

const removeDuplicates = function(nums) {
  let count = 0;
  let pointer;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (!pointer || pointer !== nums[i]) {
      pointer = nums[i];
      count++;
      [nums[i], nums[nums.length - count]] = [nums[nums.length - count], nums[i]];
    }
  }
  return nums.splice(count *= -1);
};
