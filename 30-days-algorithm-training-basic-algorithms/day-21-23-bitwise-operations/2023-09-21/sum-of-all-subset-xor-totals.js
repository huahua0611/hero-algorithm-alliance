/**
 * @param {number[]} nums
 * @return {number}
 */
const subsetXORSum = function (nums) {
  let result = 0;
  for (let i = 0; i < 1 << nums.length; i += 1) {
    let sum = 0;
    for (let j = 0; j < nums.length; j += 1) {
      if (i & (1 << j)) {
        sum ^= nums[j];
      }
    }

    result += sum;
  }

  return result;
};
