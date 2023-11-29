/**
 * @param {number[]} nums
 * @return {number}
 */
const countElements = function (nums) {
  nums.sort((a, b) => a - b);

  let result = 0;
  for (let i = 1; i < nums.length - 1; i += 1) {
    if (nums[i] === nums[0] || nums[i] === nums[nums.length - 1]) {
      continue;
    }

    result += 1;
  }

  return result;
};
