
/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

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
  let test = updatedRange.filter(value => { return value && value >= start; });
  console.log(test);
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
