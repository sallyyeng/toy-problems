/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

const hundredToStrings = (value) => {
  let stringArr = [];

  // get hundreds value (i.e if input 509, output is 5)
  let hundredValue = Math.floor(value / 100);

  // if output is not 0
  if (hundredValue !== 0) {
    // push hundreds value + 'hundred'
    stringArr.push(`${numbersToWords[hundredValue]} hundred`);
  }

  // address remainder
  let remainder = value % 100;

  if (remainder > 0 && remainder < 20) {
    stringArr.push(numbersToWords[remainder]);
  } else if (remainder > 0) {
    let tens = Math.floor(remainder / 10) * 10;
    let ones = remainder % 10;

    if (ones !== 0) {
      stringArr.push(numbersToWords[tens] + '-' + numbersToWords[ones]);
    } else {
      stringArr.push(numbersToWords[tens]);
    }
  }

  return stringArr.join(' ');
};

Number.prototype.toEnglish = function () {
  let value = this.valueOf();
  if (value === 0) return 'zero';

  let stringArr = [];
  let currPlace = 1000000000000000000;

  // while place is greater than or equal to one
  while (currPlace >= 1) {
    // grab 539 from 539888888
    let hundred = Math.floor(value / currPlace);

    if (hundred > 0) {
      // call hundredToStrings helper and push
      stringArr.push(hundredToStrings(hundred));

      // if place isn't 1, (i.e. we're not at the last 3 digits)
      if (currPlace !== 1) {
        // add numbersToPlace[place] to output
        stringArr.push(numbersToPlace[currPlace]);
      }
    }
    // decrement value by hundreds + place
    value -= hundred * currPlace;
    // divide place by 1000
    currPlace /= 1000;
  }

  // join output arr
  return stringArr.join(' ');
};
