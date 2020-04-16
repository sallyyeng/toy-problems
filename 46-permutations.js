/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [];

  const helper = start => {
    if (start === nums.length - 1) {
      result.push([...nums]);
    }

    for (let i = start; i < nums.length; i++) {
      let copy;

      if (start !== i) {
        copy = [...nums];
        nums[start] = copy[i];
        nums[i] = copy[start];
      }

      helper(start + 1);

      if (start !== i) {
        nums = [...copy];
      }
    }
  };

  helper(0);
  return result;
};

const input = [1, 2, 3, 3];
const result = permute(input);
console.log("result: ", result);
