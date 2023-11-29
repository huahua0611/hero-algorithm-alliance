/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  return (nums[n - 1] - 1) * (nums[n - 2] - 1);
};
