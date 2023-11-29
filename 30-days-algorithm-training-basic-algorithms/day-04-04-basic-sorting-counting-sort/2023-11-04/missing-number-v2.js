/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  let result = nums.length;
  for (let i = 0; i < nums.length; i += 1) {
    result = result ^ nums[i] ^ i;
  }
};
