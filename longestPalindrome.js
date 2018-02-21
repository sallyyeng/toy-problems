const longestPalindrome = function(string) {
  let length = string.length;
  let longestSoFar = '';

  for (let i = 0; i < length; i++) {
    let evenCase = findPal(i, i + 1, length, string);
    let oddCase = findPal(i - 1, i + 1, length, string);
    longestSoFar = evenCase.length > longestSoFar.length ? evenCase : longestSoFar;
    longestSoFar = oddCase.length > longestSoFar.length ? oddCase : longestSoFar;
  }

  return longestSoFar;
};

const findPal = (leftIndex, rightIndex, length, string) => {
  while ( leftIndex >= 0 && rightIndex < length && string[leftIndex] === string[rightIndex]) {
    leftIndex--;
    rightIndex++;
  }
  // left and right will go one index further than palindrome
  // you want to increment left and slice doesn't include the second argument index (just goes up to)
  return string.slice(leftIndex + 1, rightIndex);
};
