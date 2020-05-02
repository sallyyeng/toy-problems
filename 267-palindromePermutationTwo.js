const isPalindrome = charMap => {
  let oddFreqCount = 0;

  for (let freq of charMap.values()) {
    if (freq % 2 !== 0) {
      oddFreqCount++;
    }
  }

  // palindrome: all chars must have even freq count besides one
  return oddFreqCount <= 1;
};

var generatePalindromes = function(string) {
  let result = [];
  let charFreqMap = new Map();
  let midpoint = "";
  let permutationArr = [];

  if (string.length === 1) {
    return [string];
  }

  // create map of character and frequency count
  for (let char of string) {
    let currentCount = charFreqMap.has(char) ? charFreqMap.get(char) : 0;
    charFreqMap.set(char, currentCount + 1);
  }

  // if not palindrome, return empty array
  if (!isPalindrome(charFreqMap)) return [];

  // edge case optimization:
  // if valid permutation, but only one unique char, no need to permute
  if (charFreqMap.size === 1) return [string];

  // get midpoint and letters to permute
  // letters to permute: all even freq letters / 2
  // if map = { a: 2, b: 4, c: 3 } => permArr = [a, b, b, c]
  // midpoint: the character with frequency of 1 (after subtracting any pairs)
  for (let key of charFreqMap.keys()) {
    let currCount = charFreqMap.get(key);
    while (currCount >= 2) {
      permutationArr.push(key);
      currCount -= 2;
    }
    if (currCount === 1) {
      midpoint = key;
    }
  }

  // generate all permutations of one side of the palindrome
  let uniqPerm = new Set();
  const helper = start => {
    if (start === permutationArr.length - 1) {
      uniqPerm.add([...permutationArr].join(""));
    }

    for (let i = start; i < permutationArr.length; i++) {
      let copy = [...permutationArr];
      if (i !== start) {
        permutationArr[start] = copy[i];
        permutationArr[i] = copy[start];
      }

      helper(start + 1);

      if (i !== start) {
        permutationArr = [...copy];
      }
    }
  };

  helper(0);

  //reverse and add to res
  for (let perm of uniqPerm.keys()) {
    let reversed = perm
      .split("")
      .reverse()
      .join("");
    result.push(perm + midpoint + reversed);
  }

  return result;
};

// const input = "abc";
const input = "aabbbcc";
// const input = "aaaabbbb";
// const input = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

const result = generatePalindromes(input);
console.log("result: ", result);
