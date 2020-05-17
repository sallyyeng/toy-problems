/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(sentence, target) {
  const targetLettersToCountMap = new Map();
  let seenCount = target.length;

  Array.from(target).forEach(
    seenCount =>
      (targetLettersToCountMap[seenCount] =
        (targetLettersToCountMap[seenCount] || 0) + 1)
  );

  // NOTE: adds time to Leetcode result, but doesn't matter
  // because this calc time would be dropped in overall
  // time complexity
  const filteredSentence = Array.from(sentence)
    .map((letter, index) => [letter, index])
    .filter(([letter]) => targetLettersToCountMap[letter]);

  let leftPointer = 0;
  let rightPointer = 0;

  let start = 0;
  let minLength = Infinity;

  while (rightPointer < filteredSentence.length) {
    const [currLetter, currRightIndex] = filteredSentence[rightPointer];

    if (targetLettersToCountMap[currLetter] > 0) seenCount--;
    targetLettersToCountMap[currLetter] -= 1;
    rightPointer += 1;

    while (seenCount === 0) {
      const [currLetter, currLeftIndex] = filteredSentence[leftPointer];
      const currLength = currRightIndex - currLeftIndex;

      if (currLength < minLength) {
        minLength = currLength;
        start = currLeftIndex;
      }

      if (targetLettersToCountMap[currLetter] === 0) seenCount++;
      targetLettersToCountMap[currLetter] += 1;
      leftPointer += 1;
    }
  }

  return minLength === Infinity
    ? ""
    : sentence.substring(start, start + minLength + 1);
};

let sentence = "TCTTATBCTTTTBTACCT";
let target = "ABCC";
let result = "BTACC";
console.log("resultA: ", minWindow(sentence, target) === result);

// sentence = "ADOBECODEBANC";
// target = "ABC";
// result = "BANC";
console.log("resultB: ", minWindow(sentence, target) === result);

// sentence = "aaaaabbbbbcdd";
// target = "abcdd";
// result = "abbbbbcdd";
console.log("resultC: ", minWindow(sentence, target) === result);
