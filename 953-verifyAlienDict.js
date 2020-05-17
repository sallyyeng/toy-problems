const isLexical = (currWord, nextWord, orderMap) => {
  const maxPointer = Math.max(currWord.length, nextWord.length);
  let pointer = 0;

  // increment pointer until the characters don't match
  while (
    currWord.charAt(pointer) === nextWord.charAt(pointer) &&
    pointer < maxPointer
  )
    pointer++;

  // if nextWord ends earlier than the currWord, return false
  // i.e. currWord = 'apple' && nextWord = 'app'
  if (currWord[pointer] && !nextWord[pointer]) return false;

  // if not in order, return false
  if (
    orderMap.get(currWord.charAt(pointer)) >
    orderMap.get(nextWord.charAt(pointer))
  ) {
    return false;
  }

  return true;
};

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const orderMap = new Map(Array.from(order).map((letter, i) => [letter, i]));

  for (let i = 0; i < words.length; i++) {
    const currWord = words[i];
    const nextWord = words[i + 1];

    if (currWord && nextWord) {
      if (!isLexical(currWord.charAt(0), nextWord.charAt(0), orderMap)) {
        return false;
      }

      if (!isLexical(currWord, nextWord, orderMap)) {
        return false;
      }
    }
  }

  return true;
};

let words = ["app", "apple"];
let order = "abcdefghijklmnopqrstuvwxyz";
let expected = true;
console.log(
  "test status: ",
  isAlienSorted(words, order) === expected ? "PASSED" : "FAIL"
);

words = ["hello", "leetcode"];
order = "hlabcdefgijkmnopqrstuvwxyz";
expected = true;
console.log(
  "test status: ",
  isAlienSorted(words, order) === expected ? "PASSED" : "FAIL"
);

words = ["aa", "a"];
order = "abqwertyuioplkjhgfdszxcvnm";
expected = false;
console.log(
  "test status: ",
  isAlienSorted(words, order) === expected ? "PASSED" : "FAILED"
);

words = ["word", "world", "row"];
order = "worldabcefghijkmnpqstuvxyz";
expected = false;

console.log(
  "test status: ",
  isAlienSorted(words, order) === expected ? "PASSED" : "FAILED"
);

words = ["apple", "app"];
order = "abcdefghijklmnopqrstuvwxyz";
expected = false;

console.log(
  "test status: ",
  isAlienSorted(words, order) === expected ? "PASSED" : "FAILED"
);
