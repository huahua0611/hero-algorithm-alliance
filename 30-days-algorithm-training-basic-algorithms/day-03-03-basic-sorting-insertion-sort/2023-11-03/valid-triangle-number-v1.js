/**
 * @param {number[]} nums
 * @return {number}
 */
const triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);

  let result = 0;

  for (let i = 0; i < nums.length - 2; i += 1) {
    for (let j = i + 1; j < nums.length - 1; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        if (nums[i] + nums[j] > nums[k]) {
          result += 1;
        }
      }
    }
  }

  return result;
};
