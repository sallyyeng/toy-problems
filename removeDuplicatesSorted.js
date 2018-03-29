
// time: O(n)
// space: O(1)

const removeDuplicates = function(nums) {
  let pointerIndex = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (!nums[pointerIndex] || nums[pointerIndex] !== nums[i]) {
      pointerIndex--;
      nums[pointerIndex] = nums[i];
    }
  }
  return nums.splice(pointerIndex);
};
