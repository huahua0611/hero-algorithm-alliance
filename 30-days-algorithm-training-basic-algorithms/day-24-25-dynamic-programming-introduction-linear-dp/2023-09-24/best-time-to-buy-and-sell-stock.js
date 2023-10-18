/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const n = prices.length;

  if (n === 1) {
    return 0;
  }

  const minPrice = new Array(n).fill(0);
  const dpProfit = new Array(n).fill(0);
  minPrice[0] = prices[0];

  for (let i = 1; i < n; i += 1) {
    minPrice[i] = Math.min(minPrice[i - 1], prices[i]);
    dpProfit[i] = Math.max(dpProfit[i - 1], prices[i] - minPrice[i]);
  }

  return dpProfit[n - 1];
};
