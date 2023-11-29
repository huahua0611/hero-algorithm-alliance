/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);

  let min = Number.MAX_VALUE;

  for (let i = 0; i + k - 1 < nums.length; i += 1) {
    min = Math.min(nums[i + k - 1] - nums[i], min);
  }

  return min;
};
