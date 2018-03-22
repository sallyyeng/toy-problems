// time: O(n);
// space: O(1);

const uniqueCharCount = function(nums) {
  if (nums.length === 0) { return 0; }
  let pointerIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[pointerIndex] !== nums[i]) {
      pointerIndex++;
      nums[pointerIndex] = nums[i];
    }
  }
  return pointerIndex + 1;
};
