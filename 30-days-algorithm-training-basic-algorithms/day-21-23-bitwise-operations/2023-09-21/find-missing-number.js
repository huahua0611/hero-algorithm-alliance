/**
 * Finds the missing number in the given array of n distinct numbers ranging from 0 to n.
 *
 * @param {number[]} nums - The array of n distinct numbers.
 * @returns {number} - The missing number in the range [0, n].
 * @requires `nums` to be an array of non-negative integers with length greater than 0
 *           and less than or equal to (10^4 - 1).
 */
function findMissingNumber(nums) {
  // Include n in the XOR operation
  let missingNumber = nums.length;

  for (let i = 0; i < nums.length; i += 1) {
    // XOR with both the index and the value at that index
    missingNumber = missingNumber ^ i ^ nums[i];
  }

  return missingNumber;
}
