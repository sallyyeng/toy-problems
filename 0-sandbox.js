const getLetterToCountMap = (string) => {
  let letterToCountMap = new Map();

  for (let letter of string) {
    if (letterToCountMap.has(letter)) {
      let newCount = letterToCountMap.get(letter) + 1;
      letterToCountMap.set(letter, newCount);
    } else {
      letterToCountMap.set(letter, 1);
    }
  }

  return letterToCountMap;
};

var generatePalindromes = function (string) {
  let result = [];
  if (!string) return result;
  if (string.length === 1) return [string];

  let letterToCountMap = getLetterToCountMap(string);

  if (letterToCountMap.size === 1) return [string];

  let midpoint;
  let oddCount = 0;
  let palindromeLetters = [];

  letterToCountMap.forEach((count, letter) => {
    while (count > 1) {
      palindromeLetters.push(letter);
      count -= 2;
    }

    if (count === 1) {
      midpoint = letter;
      oddCount++;
    }
  });

  if (oddCount > 1) return [];

  const permutations = new Set();

  const permute = (swappedToIndex) => {
    if (swappedToIndex === palindromeLetters.length - 1) {
      permutations.add(palindromeLetters.join(""));
      return;
    }

    palindromeLetters.forEach((letter, swappedFromIndex) => {
      let copy = [...palindromeLetters];
      palindromeLetters[swappedFromIndex] = palindromeLetters[swappedToIndex];
      palindromeLetters[swappedToIndex] = copy[swappedFromIndex];

      permute(swappedToIndex + 1);

      palindromeLetters = copy;
    });
  };

  permute(0);

  permutations.forEach((halfPalindrome) => {
    let reversedStr = halfPalindrome.split("").reverse().join("");

    let palindrome = midpoint
      ? `${reversedStr}${midpoint}${halfPalindrome}`
      : `${reversedStr}${halfPalindrome}`;

    result.push(palindrome);
  });

  return result;
};

// const input = "abc";
const input = "aabbbcc";
// const input = "aaaabbbb";
// const input = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

const result = generatePalindromes(input);
console.log("result: ", result);
