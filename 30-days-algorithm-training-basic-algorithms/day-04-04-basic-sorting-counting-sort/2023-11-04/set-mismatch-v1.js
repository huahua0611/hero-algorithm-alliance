/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
  const n = nums.length;

  const result = new Array(n + 1).fill(-1);
  const ans = [-1, -1];

  for (let i = 0; i < n; i += 1) {
    result[nums[i]] += 1;
  }

  for (let i = 1; i < n + 1; i += 1) {
    if (result[i] === -1) {
      ans[1] = i;
    } else if (result[i] === 1) {
      ans[0] = i;
    }
  }

  return ans;
};
