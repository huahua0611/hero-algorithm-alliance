/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findAllSmallThenTarget(nums, target) {
  let left = -1;
  let right = nums.length;

  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid > target) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right;
}

/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
const breakfastNumber = function (staple, drinks, x) {
  staple.sort((a, b) => a - b);
  drinks.sort((a, b) => a - b);

  const MOD = 1e9 + 7;
  let result = 0;

  for (let i = 0; i < staple.length; i += 1) {
    const target = x - staple[i];
    result += findAllSmallThenTarget(drinks, target);
  }

  return result % MOD;
};
