/**
 * 
 */


var maxProfit = function(prices) {
  let profit = 0;
  for(let i = 0; i<prices.length-1; i++) {
      let cur = prices[i], next = prices[i+1]
      if(cur < next) {
          profit += next-cur
      }
  }
  return profit;
};