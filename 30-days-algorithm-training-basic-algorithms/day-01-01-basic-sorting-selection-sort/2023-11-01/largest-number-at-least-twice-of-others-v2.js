/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function (nums) {
  let max = -1;
  let secondMax = -1;
  let result = -1;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > max) {
      secondMax = max;
      max = nums[i];
      result = i;
    } else if (nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }

  if (max >= 2 * secondMax) {
    return result;
  }

  return -1;
};
