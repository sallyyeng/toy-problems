/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let length = s.length;
  let lettersObj = {};
  let result = 0;
  let start = 0;
  let end = 0;

  while (start < length && end < length) {
    if (!lettersObj[s[end]]) {
      lettersObj[s[end++]] = true;
      result = Math.max(result, end - start);
    } else {
      delete lettersObj[s[start++]];
    }
  }
  return result;
};
