/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const numsSet1 = new Set(nums1);
  const numsSet2 = new Set(nums2);

  return Array.from(new Set(nums2.filter(num => numsSet1.has(num))));
};

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2]; //[2]
console.log("result: ", intersection(nums1, nums2));

nums1 = [4, 9, 5];
nums2 = [9, 4, 9, 8, 4]; //[9,4]
console.log("result: ", intersection(nums1, nums2));
