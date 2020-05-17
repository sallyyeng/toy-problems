/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let result = [];
  let remainder = 0;

  const longerNum = num1.length > num2.length ? num1 : num2;
  const reversedNum1Arr = Array.from(num1).reverse();
  const reversedNum2Arr = Array.from(num2).reverse();

  for (let i = 0; i < longerNum.length + 1; i++) {
    const parsedNum1 = parseInt(reversedNum1Arr[i]) || 0;
    const parsedNum2 = parseInt(reversedNum2Arr[i]) || 0;
    const sum = remainder + parsedNum1 + parsedNum2;

    if (sum >= 10) {
      remainder = 1;
      result.push(sum % 10);
    } else {
      if (!sum && i === longerNum.length) {
        break;
      }
      remainder = 0;
      result.push(sum);
    }
  }

  return result.reverse().join("");
};

let num1 = "47515";
let num2 = "927";
let expected = Number(num1) + Number(num2);
console.log("result: ", addStrings(num1, num2) === expected.toString());

num1 = "10021";
num2 = "999";
expected = Number(num1) + Number(num2);
console.log("result: ", addStrings(num1, num2) === expected.toString());

num1 = "1";
num2 = "9";
expected = Number(num1) + Number(num2);
console.log("result: ", addStrings(num1, num2) === expected.toString());
