/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i += 1) {
    result ^= nums[i];
  }

  return result;
};
