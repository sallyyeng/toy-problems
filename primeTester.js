/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

const primeTester = (n) => {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0 || n === 1) {
    // if n isn't a number or n is less than 1 or n is not an integer
    return false;
  }

  // get squareroot of value
  const upperLimit = Math.sqrt(Math.abs(n));

  for (let i = 2; i <= upperLimit; i++) {
    // if value is divisible by any value between 2 and upperlimit, return false
    if (n % i === 0) {
      return false;
    }
  }

  // if passed all tests, return true
  return true;
};
