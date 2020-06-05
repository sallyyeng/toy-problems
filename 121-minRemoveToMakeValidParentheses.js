/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(string) {
  let result = "";
  const openParen = "(";
  const closedParen = ")";
  const openParenStack = [];
  const indexesToRemove = new Set();

  // add unclosed open parens to stack
  // add unclosed closed parens to indexesToRemove Set
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    if (char === openParen) openParenStack.push(i);
    if (char === closedParen) {
      if (!openParenStack.length) {
        indexesToRemove.add(i);
      } else {
        openParenStack.pop();
      }
    }
  }

  // pop from open parens stack and add to indexesToRemove Set
  while (openParenStack.length) {
    const removedIndex = openParenStack.pop();
    indexesToRemove.add(removedIndex);
  }

  // create a new string with chars
  // whose indexes are not in indexesToRemove Set
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    if (!indexesToRemove.has(i)) result += char;
  }

  return result;
};

let string = "lee(t(c)o)de)";
let expected = "lee(t(c)o)de";
console.log("result: ", minRemoveToMakeValid(string) === expected);

string = "a)b(c)d";
expected = "ab(c)d";
console.log("result: ", minRemoveToMakeValid(string) === expected);

string = "))((";
expected = "";
console.log("result: ", minRemoveToMakeValid(string) === expected);

string = "(a(b(c)d)";
expected = "a(b(c)d)";
console.log("result: ", minRemoveToMakeValid(string) === expected);

// IF YOU MODIFY THE ARRAY YOU ITERATE OVER, THERE ARE
// TWO DIFFERENT BEHAVIORS BETWEEN arr.forEach vs. for() loop

// FOR LOOP MANIPULATES THE ARRAY AS YOU MUTATE
// let test = [0, 1, 2, 3, 4];
// let testObj = {};
// for (let i = 0; i < test.length; i++) {
//   let num = test[i];
//   if (num === 2) {
//     test = [0, 1, 3, 4];
//   }
//   console.log(num);
//   testObj[i] = num;
// }

// // FOREACH MAINTAINS ORIGINAL ARRAY AS YOU MUTATE
// // BUT NOT FOR MUTATING METHODS, ONLY WHEN YOU REASSIGN TEST?
// // LOOK INTO THIS BEFORE RELYING ON IT
// // FOR INSTANCE, TEST.SHIFT() WILL MUTATE
// let test = [0, 1, 2, 3, 4];
// let testObj = {};
// test.forEach((num, i) => {
//   if (num === 2) {
//     test = [0, 1, 3, 4];
//   }
//   console.log(num);
//   testObj[i] = num;
// });
// console.log(testObj);
