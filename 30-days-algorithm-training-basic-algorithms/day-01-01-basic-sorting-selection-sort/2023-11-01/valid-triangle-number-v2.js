/**
 * @param {number[]} nums
 * @return {number}
 */
const triangleNumber = function (nums) {
  const n = nums.length;

  if (n < 3) {
    return 0;
  }
  nums.sort((a, b) => a - b);

  let result = 0;

  for (let i = n - 1; i > 1; i -= 1) {
    for (let j = 0; j < i - 1; j += 1) {
      for (let k = j + 1; k < i; k += 1) {
        if (nums[i] < nums[j] + nums[k]) {
          result += 1;
        }
      }
    }
  }

  return result;
};
