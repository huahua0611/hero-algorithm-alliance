/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
  const maxNums = Math.max(...nums);
  const earn = new Array(maxNums + 1).fill(0);

  for (let i = 0; i < nums.length; i += 1) {
    earn[nums[i]] += nums[i];
  }

  if (earn.length === 1) {
    return earn[0];
  }

  if (earn.length === 2) {
    return Math.max(earn[0], earn[1]);
  }

  const dp = new Array(maxNums + 1).fill(0);
  dp[1] = earn[1];

  for (let i = 2; i < earn.length; i += 1) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + earn[i]);
  }

  return dp[maxNums];
};
