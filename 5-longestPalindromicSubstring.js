const findPalindrome = (leftIndex, rightIndex, length, string) => {
  while (
    leftIndex >= 0 &&
    rightIndex < length &&
    string[leftIndex] === string[rightIndex]
  ) {
    leftIndex--;
    rightIndex++;
  }

  // left and right will go one index further than palindrome
  // you want to increment left and slice doesn't include the second argument index (just goes up to)
  return string.slice(leftIndex + 1, rightIndex);
};

const longestPalindrome = function(string) {
  let length = string.length;
  let longestSoFar = "";

  for (let i = 0; i < length; i++) {
    let evenCase = findPalindrome(i, i + 1, length, string);
    let oddCase = findPalindrome(i - 1, i + 1, length, string);
    longestSoFar =
      evenCase.length > longestSoFar.length ? evenCase : longestSoFar;
    longestSoFar =
      oddCase.length > longestSoFar.length ? oddCase : longestSoFar;
  }

  return longestSoFar;
};

// **************************************************** //
// More code, but easier to read?
// A little more efficient on Leetcode
// **************************************************** //

// const findPalindrome = ({ str, leftPointer, rightPointer }) => {
//   let length = 0;
//   let start;

//   // check if index is within bounds vs. if char is truthy because
//   // the latter is a linear time operation
//   while (
//     leftPointer >= 0 &&
//     rightPointer < str.length &&
//     str.charAt(leftPointer) === str.charAt(rightPointer)
//   ) {
//     start = leftPointer;
//     length = rightPointer - leftPointer + 1;

//     rightPointer++;
//     leftPointer--;
//   }

//   return str.substr(start, length);
// };

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//   // tackle edge cases
//   if (s.length === 0) return "";
//   if (s.length === 1) return s;

//   // init vars
//   let longestLength;
//   let longestSoFar;

//   // for each letter in the string
//   for (let i = 0; i < s.length; i++) {
//     let largerPalindrome;

//     // find the odd palindrome
//     let oddPalindrome = findPalindrome({
//       str: s,
//       leftPointer: i,
//       rightPointer: i
//     });

//     // find the even palindrome
//     let evenPalindrome = findPalindrome({
//       str: s,
//       leftPointer: i,
//       rightPointer: i + 1
//     });

//     // find the higher length palindrome
//     largerPalindrome =
//       oddPalindrome.length > evenPalindrome.length
//         ? oddPalindrome
//         : evenPalindrome;

//     // if higher length is greater than stored length
//     if (!longestLength || largerPalindrome.length > longestLength) {
//       // override longestSoFar and longestLength
//       longestSoFar = largerPalindrome;
//       longestLength = largerPalindrome.length;
//     }
//   }

//   return longestSoFar;
// };

// // let input = "asdfghjffkl"; // ff
// // let input = "cbbd"; // bb
// // let input = "babad"; // aba or bab
// // let input = "fabrarbafcadabrarbahllh"; //  fabrarbaf

// console.log("result: ", longestPalindrome(input));
