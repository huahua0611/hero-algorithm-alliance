/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
  nums.sort((a, b) => a - b);

  let rep = -1;
  let miss = -1;

  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] === nums[i + 1]) {
      rep = nums[i];
    } else if (nums[i] - nums[i + 1] < -1) {
      miss = nums[i] + 1;
    }
  }

  if (nums[0] !== 1) {
    miss = 1;
  } else if (nums[nums.length - 1] !== nums.length) {
    miss = nums.length;
  }

  return [rep, miss];
};
