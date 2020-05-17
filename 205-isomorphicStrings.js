/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(stringA, stringB) {
  if (stringA === stringB) return true;
  if (stringA.length !== stringB.length) return false;

  const letterToIndexMapA = new Map();
  const letterToIndexMapB = new Map();

  for (let i = 0; i < stringA.length; i++) {
    const currLetterA = stringA[i];
    const currLetterB = stringB[i];

    if (!letterToIndexMapA.has(currLetterA)) {
      letterToIndexMapA.set(currLetterA, i);
    }
    if (!letterToIndexMapB.has(currLetterB)) {
      letterToIndexMapB.set(currLetterB, i);
    }

    if (
      letterToIndexMapA.has(currLetterA) &&
      letterToIndexMapB.has(currLetterB)
    ) {
      if (
        letterToIndexMapA.get(currLetterA) !==
        letterToIndexMapB.get(currLetterB)
      ) {
        return false;
        break;
      }
    }
  }

  return true;
};

// const inputA = "egg";
// const inputB = "xyy"; // true

const inputA = "title";
const inputB = "paper"; // true

// const inputA = "azz";
// const inputB = "barr"; // false

// const inputA = "ab";
// const inputB = "aa"; // false

console.log("result: ", isIsomorphic(inputA, inputB));
