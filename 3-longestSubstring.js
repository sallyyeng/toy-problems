/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(string) {
  let startPointer = 0;
  let letterToIndexMap = new Map();
  let longestLengthSoFar = 0;

  for (let index = 0; index < string.length; index++) {
    let letter = string.charAt(index);
    let storedIndex = letterToIndexMap.get(letter);

    if (storedIndex !== undefined && storedIndex >= startPointer) {
      startPointer = letterToIndexMap.get(letter) + 1;
    } else {
      let currSubstringLength = index - startPointer + 1;

      if (currSubstringLength > longestLengthSoFar) {
        longestLengthSoFar = currSubstringLength;
      }
    }

    letterToIndexMap.set(letter, index);
  }

  return longestLengthSoFar;
};

let input = "abcabdehih"; // 7
// let input = "tmmzuxt"; // 5 (tricky)
// let input = "abcabcbb"; // 3 (tricky)
// let input = "pwwkew"; // 3
// let input = "w"; // 1
// let input = ""; // 0

console.log("result: ", lengthOfLongestSubstring(input));

// **************************************************** //
// Shorter solution below, but less efficient
// **************************************************** //

// /**
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLongestSubstring = function(s) {
//   let length = s.length;
//   let lettersObj = {};
//   let result = 0;
//   let start = 0;
//   let end = 0;

//   while (start < length && end < length) {
//     if (!lettersObj[s[end]]) {
//       lettersObj[s[end++]] = true;
//       result = Math.max(result, end - start);
//     } else {
//       delete lettersObj[s[start++]];
//     }
//   }
//   return result;
// };
