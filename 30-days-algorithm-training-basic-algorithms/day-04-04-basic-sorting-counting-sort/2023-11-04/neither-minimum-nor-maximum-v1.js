/**
 * @param {number[]} nums
 * @return {number}
 */
const findNonMinOrMax = function (nums) {
  if (nums.length < 3) {
    return -1;
  }

  const min = Math.min(...nums);
  const max = Math.max(...nums);

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== min && nums[i] !== max) {
      return nums[i];
    }
  }
};
