/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(string) {
  const leftPointer = 0;
  const rightPointer = string.length - 1;
  let isSkipping = false;

  const recurse = (leftPointer, rightPointer) => {
    if (leftPointer > rightPointer) return true;

    const leftVal = string.charAt(leftPointer);
    const rightVal = string.charAt(rightPointer);

    if (isSkipping && leftVal !== rightVal) {
      return false;
    } else if (leftVal !== rightVal) {
      isSkipping = true;
      const trySkippingLeft = recurse(leftPointer + 1, rightPointer);
      const trySkippingRight = recurse(leftPointer, rightPointer - 1);

      return trySkippingLeft || trySkippingRight;
    } else {
      return recurse(leftPointer + 1, rightPointer - 1);
    }
  };

  return recurse(leftPointer, rightPointer);
};

let input = "abcdba"; // true
console.log("result: ", validPalindrome(input));

input = "deeee"; // true
console.log("result: ", validPalindrome(input));

input = "aba"; // true
console.log("result: ", validPalindrome(input));

input = "abca"; // true
console.log("result: ", validPalindrome(input));

input = "abcda"; // false
console.log("result: ", validPalindrome(input));

input = "tebbem"; // false
console.log("result: ", validPalindrome(input));

input = "bbeemm"; // false
console.log("result: ", validPalindrome(input));
