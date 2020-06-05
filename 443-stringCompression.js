/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  if (chars.length === 1) return 1;
  let currChar;
  let count = 0;

  let length = 0;
  let pointer;

  chars.forEach((char, i) => {
    if (char === currChar) {
      let countLength = `${count}`.length;

      count += 1;

      if (`${count}`.length !== countLength) length++;

      chars[pointer] = `${count}`;
    } else {
      currChar = char;
      count = 1;
      length += 2;
      pointer = !pointer ? 1 : pointer + 2;
    }
  });

  console.log("lenght: ", length);
  chars.splice(length - chars.length);
  console.log("chars: ", ...chars);
  return length;
};

let input, expected;

input = ["a", "a", "b", "b", "c", "c", "c"];
expected = 6;

console.log("pass: ", compress(input) === expected);

input = ["a"];
expected = 1;

console.log("pass: ", compress(input) === expected);
