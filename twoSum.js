// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
  let diffs = {};

  nums.forEach((num, i) => {
    let targetDiff = target - num;
    if (diffs[targetDiff] >= 0) {
      console.log(JSON.stringify([diffs[targetDiff], i]));
      return [diffs[targetDiff], i];
    }
    diffs[num] = i;
  });

};


