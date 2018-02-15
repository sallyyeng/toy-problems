/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {

  let stringArr = string.toLowerCase().split('');
  longestPal = '';

  stringArr.forEach((letter, i) => {
    let currPal = [stringArr[i]];
    let rightPos = 1;
    let leftPos = 1;

    if (letter === stringArr[i + rightPos]) {
      currPal.push(stringArr[i + rightPos]);
      rightPos = 2;
    }

    while (stringArr[i - leftPos] && stringArr[i - leftPos] === stringArr[i + rightPos]) {
      let equalLetter = stringArr[i + rightPos];
      currPal.push(equalLetter);
      currPal.unshift(equalLetter);

      rightPos += 1;
      leftPos += 1;
    }

    if (currPal.length > longestPal.length) {
      longestPal = currPal;
    }

  });
  console.log(longestPal.join(''));
  return longestPal.join('');
};

longestPalindrome('Daad is a raceecar a');

