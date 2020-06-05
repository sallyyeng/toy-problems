const eval = (subExp, map) => {
  if (!subExp || !subExp.length) return;
  if (!Number.isNaN(Number(subExp))) return Number(subExp);
  if (map.has(subExp)) return Number(map.get(subExp));

  const arrSubExp = subExp.split(" ");
  let [action, val1, val2] = arrSubExp;

  switch (action) {
    case "let":
      const expr = arrSubExp.pop();

      for (let i = 1; i < arrSubExp.length; i += 2) {
        const variable = arrSubExp[i];
        const expression =
          arrSubExp[i + 1] !== undefined
            ? eval(arrSubExp[i + 1], map)
            : map.get(variable);

        map.set(variable, expression);
      }

      return eval(expr, map);
    case "add":
      return eval(val1, map) + eval(val2, map);
    case "mult":
      return eval(val1, map) * eval(val2, map);
    default:
      return;
  }
};

/**
 * @param {string} expression
 * @return {number}
 */

var evaluate = function(expression) {
  let endScopeIndex;

  const recurseHelper = (index, map) => {
    let subExp = "";

    while (index < expression.length) {
      let char = expression[index];

      if (char === "(") {
        if (subExp.length) eval(subExp, map);
        // create a shallow copy of the existing map for proceeding nested subexpressions because
        // a. the future subexpressions can reference any previously defined variables
        // b. the future subexpressions cannot mutate the original map so when you return back in the recursive stack, the original map will not have any future scope's info and remains consistent to the map before the nested subexpressions were resolved
        subExp += recurseHelper(index + 1, new Map(map));
        index = endScopeIndex;
      } else if (char === ")") {
        endScopeIndex = index;
        return eval(subExp, map);
      } else {
        subExp += char;
      }

      index++;
    }

    return subExp;
  };

  return Number(recurseHelper(0, new Map()));
};

let input, expected, result;

input =
  "(let x0 -4 x1 1 x2 -1 x3 -1 x4 3 x5 1 x6 -4 x7 -1 x8 -5 x9 3 (let x0 -5 x2 -2 x4 -4 x6 -4 x8 0 (let x0 3 x3 -1 x6 4 x9 -2 (let x0 0 x4 -3 x8 -2 (add (add x4 (let x0 -5 x7 1 (let x0 -2 x8 -2 (mult x2 x7)))) x0)))))";
expected = -5;
result = evaluate(input);
console.log(`TEST PASSED: ${result === expected} || RESULT: ${result}`);

input = "(let x -2 y x y)";
expected = -2;
result = evaluate(input);
console.log(`TEST PASSED: ${result === expected} || RESULT: ${result}`);

input = "(let x 2 (mult x (let x 3 y 4 (add x y))))";
expected = 14;
result = evaluate(input);
console.log(`TEST PASSED: ${result === expected} || RESULT: ${result}`);

input = "(let x 1 y 2 x (add x y) (add x y))";
expected = 5;
result = evaluate(input);
console.log(`TEST PASSED: ${result === expected} || RESULT: ${result}`);

input = "(let x 2 (add (let x 3 (let x 4 x)) x))";
expected = 6;
result = evaluate(input);
console.log(`TEST PASSED: ${result === expected} || RESULT: ${result}`);

input = "(let a1 3 b2 (add a1 1) b2)";
expected = 4;
result = evaluate(input);
console.log(`TEST PASSED: ${result === expected} || RESULT: ${result}`);

input = "(add 1 2)";
expected = 3;
result = evaluate(input);
console.log(`TEST PASSED: ${result === expected} || RESULT: ${result}`);

input = "(mult 3 (add 2 3))";
expected = 15;
result = evaluate(input);
console.log(`TEST PASSED: ${result === expected} || RESULT: ${result}`);

input = "(let x 2 (mult x 5))";
expected = 10;
result = evaluate(input);
console.log(`TEST PASSED: ${result === expected} || RESULT: ${result}`);

input = "(let x 3 x 2 x)";
expected = 2;
result = evaluate(input);
console.log(`TEST PASSED: ${result === expected} || RESULT: ${result}`);

// ************************************************** //
// LEETCODE SOLUTION - SAME TIME //
// ************************************************** //

// const buildSubExpression = (strExp, startIndex) => {
//   let index = startIndex;

//   if (strExp.charAt(index) === "(") {
//     let count = 1;
//     index++;

//     while (index < strExp.length && count > 0) {
//       const currChar = strExp.charAt(index);
//       if (currChar === "(") {
//         count++;
//       } else if (currChar === ")") {
//         count--;
//       }
//       index++;
//     }
//   } else {
//     while (index < strExp.length && strExp.charAt(index) !== " ") {
//       index++;
//     }
//   }

//   return index;
// };

// const parseForNextSubExpression = strExp => {
//   const result = [];
//   let strExpNoParens = strExp.substring(1, strExp.length - 1);
//   let startIndex = 0;

//   while (startIndex < strExpNoParens.length) {
//     let endIndex = buildSubExpression(strExpNoParens, startIndex);
//     result.push(strExpNoParens.substring(startIndex, endIndex));
//     startIndex = endIndex + 1;
//   }

//   return result;
// };

// const eval = (strExp, map) => {
//   if (!Number.isNaN(Number(strExp))) return Number(strExp);
//   if (strExp.charAt(0).match(/[a-zA-Z]/)) return map.get(strExp);

//   let result;
//   const list = parseForNextSubExpression(strExp);
//   const [action, val1, val2] = list;

//   if (action === "add") {
//     const addEval1 = eval(val1, map);
//     const addEval2 = eval(val2, map);

//     result = addEval1 + addEval2;
//   } else if (action === "mult") {
//     const multEval1 = eval(val1, map);
//     const multEval2 = eval(val2, map);

//     result = multEval1 * multEval2;
//   } else {
//     const varMap = new Map(map);

//     for (let i = 1; i < list.length - 1; i += 2) {
//       const variable = list[i];
//       const expression = list[i + 1];

//       varMap.set(variable, eval(expression, varMap));
//     }

//     result = eval(list[list.length - 1], varMap);
//   }
//   return result;
// };

// const evaluate = strExp => {
//   return eval(strExp, new Map());
// };
