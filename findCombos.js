/*
Given an array of unsorted integers, where all values are > 0,
write code to produce the number of sets that satisfy the following:

a + b > c

a + c > b

b + c > a

There are no duplicates in the array.
You may apply a sort function to the array if you want.

Ex for input of an array [2,5,4,3] your code should return the integer 3
because there are 3 combinations that satisfy the three conditions above

[2,3,4], [2,4,5], [3,4,5]

Note that we don’t count different orderings of the same numbers more than once.
*/

var combinationGreaterThan = function(intArr) {
  var combos = 0;

  intArr.sort(function(a, b) {
    return b - a;
  });

  recurse = (sum, index, round) => {
    if (sum < 0) {
      combos++;
      return;
    } else if (round === 2) {
      return;
    }

    for (let i = index; i < intArr.length; i++) {
      currInt = intArr[i];
      if (currInt) { recurse(sum - currInt, i + 1, round + 1); }
    }
  };
  intArr.forEach((int, j) => recurse(int, j + 1, 0));
  return combos;
};

// input = [11,8,5,3,2]; // 1
// input = [9,7,6,4,2]; // 5
// input = [5,4,3,2]; // 3

console.log(combinationGreaterThan(input));
