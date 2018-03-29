const reindexArr = function(pivot, arr) {
  let resultArr = [];
  let i = pivot;
  let count = 0;

  while (count < arr.length) {
    resultArr.push(arr[i]);
    if (i + 1 === arr.length) {
      i = 0;
    } else {
      i++;
    }
    count++;
  }
  return resultArr;
};

const binarySearch = function(arr, target) {
  let minIndex = 0;
  let maxIndex = arr.length - 1;

  while (minIndex <= maxIndex) {
    currIndex = Math.floor((minIndex + maxIndex) / 2);
    currElement = arr[currIndex];

    if (currElement < target) {
      minIndex = currIndex + 1;
    } else if (currElement > target) {
      maxIndex = currIndex - 1;
    } else {
      return currIndex;
    }
  }
  return -1; // if target not found, return -1
};

const searchForTargetInRotatedArray = function(nums, target) {
  if (nums.length === 0) { return -1; }
  let pivot = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] && nums[i] < nums[i - 1]) {
      pivot = i;
      break;
    }
  }

  // reindexes input array to start at pivot (smallest value)
  nums = reindexArr(pivot, nums);
  // find target position (relative to pivot b/c reindexing)
  let stepsFromPivot = binarySearch(nums, target);

  // if target is not found, return -1
  if (stepsFromPivot === -1) { return stepsFromPivot; }

  // return index of target in original array
  if (pivot + stepsFromPivot < nums.length) {
    return pivot + stepsFromPivot;
  } else {
    return (pivot + stepsFromPivot) - nums.length;
  }
};
