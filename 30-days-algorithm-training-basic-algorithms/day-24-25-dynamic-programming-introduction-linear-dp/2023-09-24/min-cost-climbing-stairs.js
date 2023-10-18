/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  if (cost.length === 2) {
    return Math.min(cost[0], cost[1]);
  }

  let dp = new Array(cost.length).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < cost.length; i += 1) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }

  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};
