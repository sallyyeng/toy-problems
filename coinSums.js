var coins = [200, 100, 50, 20, 10, 5, 2, 1];

var makeChange = function(sum, coinIndex = 0) {
  let result = 0;

  if (sum === 0) {
    return 1;
  }

  for (let i = coinIndex; i < coins.length; i++) {
    let coin = coins[i];
    // inner recursive edge cases:
    // coin is larger than target val or
    // subtracting current coin will yield a neg val
    if (coin > sum || sum - coin < 0) { continue; }
    // otherwise, recurse
    result += makeChange(sum - coin, i);
  }

  return result;
};
