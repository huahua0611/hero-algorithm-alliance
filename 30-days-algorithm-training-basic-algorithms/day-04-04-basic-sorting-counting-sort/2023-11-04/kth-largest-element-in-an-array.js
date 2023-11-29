/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  const result = new Array(max - min + 1).fill(0);

  for (let i = 0; i < nums.length; i += 1) {
    result[nums[i] - min] += 1;
  }

  let top = 1;
  for (let i = result.length - 1; i >= 0; i -= 1) {
    while (result[i] > 0) {
      if (top === k) {
        return i + min;
      }
      result[i] -= 1;
      top += 1;
    }
  }
};
