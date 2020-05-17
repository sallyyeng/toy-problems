/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const alphaNumStr = s.toLowerCase().replace(/[\W]/g, "");

  if (alphaNumStr.length === 0) return true;

  let leftPointer = 0;
  let rightPointer = alphaNumStr.length - 1;

  while (leftPointer < rightPointer) {
    if (alphaNumStr.charAt(leftPointer) !== alphaNumStr.charAt(rightPointer)) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
};

let input = "A man, a plan, a canal: Panama";
console.log("result: ", isPalindrome(input));

input = "raceecar";
console.log("result: ", isPalindrome(input));

input = "0P";
console.log("result: ", isPalindrome(input));
