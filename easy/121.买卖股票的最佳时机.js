/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0], profit = 0;
  prices.forEach(cur => {
      if(cur < min) min = cur;
      if(cur -min > profit) profit = cur-min
  })
  return profit;
};