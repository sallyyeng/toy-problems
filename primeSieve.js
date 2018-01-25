
/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

const primeSieve = function (start, end) {
  // create range between 2 and end
  let updatedRange = range(2, end);
  let currPrimeIndex = 0;

  // while currPrimeIndex < sqrt(end)
  while (updatedRange[currPrimeIndex] <= Math.sqrt(end)) {
    let multiple = updatedRange[currPrimeIndex];

    // iterate through array where i starts at first multiple of value at currPrimeIndex
    for (let i = currPrimeIndex + multiple; i <= updatedRange.length; i += multiple) {

      // switch each multiple to null
      updatedRange[i] = null;
    }

    // increment currPrimeIndex
    currPrimeIndex ++;

    // while currPrimeIndex is null and less than end, increment currPrimeIndex
    while (!multiple && multiple < Math.sqrt(end)) {
      let multiple = updatedRange[currPrimeIndex];
      currPrimeIndex++;
    }
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

