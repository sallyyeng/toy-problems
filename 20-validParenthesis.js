/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) return false;
  let stack = [];
  let endIndex = -1;
  let openChar = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  const isOpenChar = s => openChar[s];
  const isPairing = s => openChar[stack[endIndex]] === s;
  for (let letter of s) {
    if (isOpenChar(letter)) {
      stack.push(letter);
      endIndex++;
    } else {
      if (isPairing(letter)) {
        stack.pop();
        endIndex--;
      } else {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
