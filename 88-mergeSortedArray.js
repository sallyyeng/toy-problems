/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, nums1Length, nums2, nums2Length) {
  let nums1Pointer = 0;
  let nums2Pointer = 0;
  let tempPointer = 0;
  const tempArr = [];

  while (nums1Pointer < nums1.length) {
    const nums1Val =
      nums1Pointer < nums1Length ? nums1[nums1Pointer] : Infinity;
    const nums2Val =
      nums2Pointer < nums2Length ? nums2[nums2Pointer] : Infinity;
    const tempVal =
      tempArr[tempPointer] === undefined ? Infinity : tempArr[tempPointer];

    const minVal = Math.min(nums1Val, nums2Val, tempVal);

    if (minVal === nums1Val) {
      nums1Pointer++;
      continue;
    } else {
      const temp = nums1Val;
      nums1[nums1Pointer] = minVal;
      tempArr.push(temp);
      nums1Pointer++;

      if (minVal === nums2Val) {
        nums2Pointer++;
      } else {
        tempPointer++;
      }
    }
  }

  return nums1;
};

let nums1 = [4, 5, 6, 0, 0, 0];
let nums1Length = 3;
let nums2 = [1, 2, 3];
let nums2Length = 3; // [1, 2, 3, 4, 5, 6];

console.log("result: ", ...merge(nums1, nums1Length, nums2, nums2Length));

nums1 = [1, 2, 3, 0, 0, 0];
nums1Length = 3;
nums2 = [2, 5, 6];
nums2Length = 3; // [1, 2, 2, 3, 5, 6];

console.log("result: ", ...merge(nums1, nums1Length, nums2, nums2Length));

nums1 = [1, 2, 4, 7, 0, 0, 0];
nums1Length = 4;
nums2 = [3, 5, 6];
nums2Length = 3; // [1, 2, 3, 4, 5, 6, 7];

console.log("result: ", ...merge(nums1, nums1Length, nums2, nums2Length));

nums1 = [0, 0, 3, 0, 0, 0, 0, 0, 0];
nums1Length = 3;
nums2 = [-1, 1, 1, 1, 2, 3];
nums2Length = 6; // [-1, 0, 0, 1, 1, 1, 2, 3, 3];

console.log("result: ", ...merge(nums1, nums1Length, nums2, nums2Length));
