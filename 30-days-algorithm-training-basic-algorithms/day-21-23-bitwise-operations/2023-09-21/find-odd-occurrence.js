/**
 * Finds the number that appears an odd number of times in the given array,
 * while all other numbers appear an even number of times.
 *
 * @param {number[]} nums - The array of numbers.
 * @returns {number} - The number that appears an odd number of times.
 * @requires `nums` to be a non-empty array of non-negative integers.
 */
function findOddOccurrence(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i += 1) {
    result ^= nums[i];
  }

  return result;
}
