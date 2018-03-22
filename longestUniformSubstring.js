// time complexity: O(2n) = O(n) = linear;
// space complexity: O(1) contant;

const longestUniformSubstring = function(s) {
  let length = s.length;
  let letter = s[0];
  let startIndex = 0;
  let endIndex = 0;
  let resultIndex = 0;
  let resultLength = 0;

  // edge case
  if (s.length === 0) { return 'Invalid input'; }

  // while we are iterating through the string
  while (startIndex < length && endIndex < length) {
    // if letter at endIndex is a repeated character
    if (s[endIndex] === letter) {
      // move endIndex forward
      endIndex++;
      // if this uniform substring is larger than current one recorded,
      if (endIndex - startIndex > resultLength) {
        // replace resultIndex and resultLength
        resultLength = endIndex - startIndex;
        resultIndex = startIndex;
      }
    // otherwise, move the start index until you find a new letter
    } else {
      startIndex++;
      // when new letter is found, reassign letter to new letter
      if (s[startIndex] !== letter) { letter = s[startIndex]; }
    }
  }
  return [resultIndex, resultLength];
};

/************************************* TEST HELPER FUNCTIONS *************************************/

const testArrayEquality = function(array1, array2) {
  if (array1.length !== array2.length) { return false; }
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assert = function(expectedBehavior, descriptionOfCorrectBehavior) {
  if (!expectedBehavior) {
    console.log(descriptionOfCorrectBehavior);
  } else {
    console.log('test passed');
  }
};

/************************************* TEST *************************************/

let expectedBehavior = 'should return tuple containing startIndex at index 0 and length at index 1 of longestSubstring';

assert(Array.isArray(longestUniformSubstring('ddffftlllaajjjjjeeill')) === true, 'should return an Array');
assert(longestUniformSubstring('ddffftlllaajjjjjeeill').length === 2, 'should return a tuple');

assert(testArrayEquality(longestUniformSubstring('ddffftlllaajjjjjeeill'), [11, 5]) === true, expectedBehavior);
assert(testArrayEquality(longestUniformSubstring('abbbbccddeeeeeef'), [9, 6]) === true, expectedBehavior);
assert(testArrayEquality(longestUniformSubstring('ddffftlllaajjjjjeeill'), [11, 5]) === true, expectedBehavior);
assert(testArrayEquality(longestUniformSubstring('ddf'), [0, 2]) === true, expectedBehavior);
assert(testArrayEquality(longestUniformSubstring('a'), [0, 1]) === true, expectedBehavior);
assert(testArrayEquality(longestUniformSubstring(''), 'Invalid input') === true, expectedBehavior);
