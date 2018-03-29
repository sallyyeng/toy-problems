/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  let uniqueLetters = {};

  for (let letter of str) {
    uniqueLetters[letter] = true;
  }

  str = Object.keys(uniqueLetters).sort().join('');
  console.log(str);

  let outputArr = [];
  const recurse = (set, index) => {
    if (index >= str.length) {
      outputArr.push(set);
    } else {
      recurse(set, index + 1);
      recurse(set + str[index], index + 1);
    }
  };
  recurse('', 0);
  return outputArr;
};
