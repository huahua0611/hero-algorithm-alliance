/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  let first = 0;
  let second = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }

  return (first - 1) * (second - 1);
};
