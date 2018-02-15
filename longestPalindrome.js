/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

const longestPalindrome = function(string) {
  let length = string.length;
  let longestSoFar = '';

  for (let i = 0; i < length; i++) {
    let evenCase = findPal(i, i + 1, length, string);
    let oddCase = findPal(i - 1, i + 1, length, string);
    longestSoFar = evenCase.length > longestSoFar.length ? evenCase : longestSoFar;
    longestSoFar = oddCase.length > longestSoFar.length ? oddCase : longestSoFar;
  }

  return longestSoFar;
};

const findPal = (leftIndex, rightIndex, length, string) => {
  while ( leftIndex >= 0 && rightIndex < length && string[leftIndex] === string[rightIndex]) {
    leftIndex--;
    rightIndex++;
  }
  // left and right will go one index further than palindrome
  // you want to increment left and slice doesn't include the second argument index (just goes up to)
  return string.slice(leftIndex + 1, rightIndex);
};
