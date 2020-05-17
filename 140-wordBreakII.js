const getStartToEndIndexes = (fullString, wordDict) => {
  let shouldReturnResult = false;
  let startIndexQueue = [0];
  let startToEndIndexMap = new Map();
  let dictMap = new Set(wordDict);

  while (startIndexQueue.length) {
    let start = startIndexQueue.shift();

    for (let end = start + 1; end <= fullString.length; end++) {
      let currSubString = fullString.substring(start, end);

      if (dictMap.has(currSubString)) {
        if (end === fullString.length) shouldReturnResult = true;

        if (startToEndIndexMap.has(start)) {
          let currSet = startToEndIndexMap.get(start).add(end);

          startToEndIndexMap.set(start, currSet);
        } else {
          startToEndIndexMap.set(start, new Set([end]));
        }

        startIndexQueue.push(end);
      }
    }
  }

  return shouldReturnResult ? startToEndIndexMap : false;
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(fullString, wordDict) {
  let sentences = [];

  // create map of start to end indexes
  let startToEndIndexMap = getStartToEndIndexes(fullString, wordDict);

  if (!startToEndIndexMap) return sentences;

  // create recurse helper to build sentence
  const recurse = (startIndex, currSentence) => {
    if (currSentence.join("").length === fullString.length) {
      sentences.push(currSentence.join(" "));
      return;
    }

    let endIndexes = startToEndIndexMap.get(startIndex);

    if (!endIndexes) return;

    endIndexes.forEach(endIndex => {
      let currWord = fullString.substring(startIndex, endIndex);
      currSentence.push(currWord);

      recurse(endIndex, currSentence);

      currSentence.pop(currWord);
    });
  };

  recurse(0, []);

  return sentences;
};

// const s = "catsanddog";
// const wordDict = ["cat", "cats", "and", "sand", "dog"];
// Output:
// [
//   "cats and dog",
//   "cat sand dog"
// ]

// const s = "pineapplepenapple";
// const wordDict = ["apple", "pen", "applepen", "pine", "pineapple"];
// Output:
// [
//   "pine apple pen apple",
//   "pineapple pen apple",
//   "pine applepen apple"
// ]

// const s = "catsandog";
// const wordDict = ["cats", "dog", "sand", "and", "cat"];
// Output:
// []

const s = "abcd";
const wordDict = ["a", "abc", "b", "cd"];

console.log("result: ", wordBreak(s, wordDict));
