/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  // if string is empty, return 0
  if (s.length === 0) return 0;

  let stack = [];
  let currDigit = 0;
  let operand = "+";

  for (let i = 0; i <= s.length; i++) {
    let currChar = s.charAt(i);
    let numChar = parseInt(currChar);

    // if char is empty space, continue
    if (currChar === " ") continue;

    // if char is an integer
    if (numChar >= 0 && numChar <= 9) {
      // add to currDigit
      currDigit = currDigit * 10 + numChar;
      continue;
    }

    let eval;
    // if char is an operand, handle appropriately
    switch (operand) {
      case "+":
        eval = currDigit;
        break;
      case "-":
        eval = -1 * currDigit;
        break;
      case "*":
        eval = stack.pop() * currDigit;
        break;
      case "/":
        eval = Math.trunc(stack.pop() / currDigit);
        break;
      default:
        break;
    }
    stack.push(eval);

    currDigit = 0;
    operand = currChar;
  }

  // reduce remaining operations (only  +/-'s left)
  return stack.reduce((accum, currVal) => accum + currVal);
};

let input = "50-20*2/5+8";
const result = calculate(input);
console.log("result :", result);
