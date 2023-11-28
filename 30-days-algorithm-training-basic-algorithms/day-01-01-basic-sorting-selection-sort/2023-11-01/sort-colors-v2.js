/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let i = 0;

  while (i <= right) {
    if (nums[i] === 0) {
      const tmp = nums[left];
      nums[left] = nums[i];
      nums[i] = tmp;
      left += 1;
      i += 1;
    } else if (nums[i] === 2) {
      const tmp = nums[right];
      nums[right] = nums[i];
      nums[i] = tmp;
      right -= 1;
    } else {
      i += 1;
    }
  }
};
