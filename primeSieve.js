const primeSieve = function (start, end) {
  let updatedRange = range(2, end);
  let currPrimeIndex = 0;

  while (updatedRange[currPrimeIndex] <= Math.sqrt(end)) {
    // mark all multiples not prime
    let multiple = updatedRange[currPrimeIndex];
    if (multiple) {
      for (let i = currPrimeIndex + multiple; i <= updatedRange.length; i += multiple) {
        updatedRange[i] = null;
      }
    }
    currPrimeIndex ++;
  }
  // filter for values greater than start
  return updatedRange.filter(value => { return value && value >= start; });
};

const range = function (start, end) {
  let range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
};
