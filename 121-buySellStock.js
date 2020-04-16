/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  if (prices.length === 0 || prices.length === 1) return profit;

  let minPrice;
  prices.forEach(price => {
    if (minPrice === undefined || price < minPrice) {
      minPrice = price;
    } else {
      let currDiff = price - minPrice;
      if (currDiff > profit) profit = currDiff;
    }
  });

  return profit;
};

// const input = [0];
// const input = [2, 1];
// const input = [1, 7, 3, 8, 9, 0, 10]; // 10
// const input = [7, 1, 5, 3, 6, 4]; // 5;
// const input = [10, 1, 6, 3, 7, 0]; // 6
console.log("result: ", maxProfit(input));
