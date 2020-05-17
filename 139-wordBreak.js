/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = (fullString, wordDict) => {
  if (wordDict == null || wordDict.length === 0) return false;

  const cache = new Map([["", true]]);
  const recurse = fullString => {
    if (cache.has(fullString)) return cache.get(fullString);

    for (const word of wordDict) {
      if (
        fullString.startsWith(word) &&
        recurse(fullString.slice(word.length))
      ) {
        cache.set(fullString, true);
        return true;
      }
    }

    cache.set(fullString, false);
    return false;
  };

  return recurse(fullString);
};

// var wordBreak = function (string, wordDict) {
//   let startIndex;
//   let startIndexQueue = [0];
//   let seenStartingIndexes = new Set();
//   let dictMap = new Set(wordDict);

//   while (startIndexQueue.length) {
//     [startIndex] = startIndexQueue.splice(0, 1);

//     if (!seenStartingIndexes.has(startIndex)) {
//       seenStartingIndexes.add(startIndex);

//       for (let endIndex = startIndex + 1; endIndex <= string.length; endIndex++) {
//         let currWord = string.substring(startIndex, endIndex);
//         if (dictMap.has(currWord)) {
//           if (endIndex === string.length) {
//             return true;
//           } else {
//             startIndexQueue.push(endIndex);
//           }
//         }
//       }
//     }
//   }

//   return false;
// };

let inputWordDict = ["leet", "code"];
let inputString = "leetcode"; // true

// let inputWordDict = ['apple', 'pen'];
// let inputString = 'applepenapple' // true

// let inputWordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
// let inputString = 'catsandog' // false

// let inputWordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
// let inputString = "pineapplepenapple"

// let inputWordDict = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa"];
// let inputString = "aaaaaaaaab"

console.log("result: ", wordBreak(inputString, inputWordDict));
