/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const max = Math.max(...nums);
  const result = new Array(max + 1).fill(0);

  for (let i = 0; i < nums.length; i += 1) {
    result[nums[i]] += 1;
  }

  for (let i = 0; i < result.length; i += 1) {
    if (result[i] === 0) {
      return i;
    }
  }

  return result.length;
};
