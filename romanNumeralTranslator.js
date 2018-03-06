
var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  let total = 0;

  if (romanNumeral === NaN) { return null; }

  for (let i = 0; i < romanNumeral.length; i++) {
    let currentVal = DIGIT_VALUES[romanNumeral[i]];
    let nextVal = DIGIT_VALUES[romanNumeral[i + 1]];

    nextVal && nextVal > currentVal ? total -= currentVal : total += currentVal;
  }
  console.log(total);
  return total;

};
