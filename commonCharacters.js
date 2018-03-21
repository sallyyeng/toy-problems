
const commonCharacters = function(string1, ...args) {
  let commonCharsObj = {};
  let otherStrings = [...args];
  let result = '';

  for (let letter of string1) {
    if (letter.match(/[a-z]/i)) {
      commonCharsObj[letter] = 0;
    }
  }

  otherStrings.forEach(otherString => {
    for (let letter of otherString) {
      if (commonCharsObj[letter] >= 0) { commonCharsObj[letter]++; }
    }
  });

  for (let letter of string1) {
    if (commonCharsObj[letter] === otherStrings.length) { result += letter; }
  }

  return result;
};
