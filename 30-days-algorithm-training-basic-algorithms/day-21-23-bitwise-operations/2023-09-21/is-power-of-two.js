/**
 * Determines if a given number is a power of 2.
 *
 * @param {number} num - The number to be checked.
 * @returns {boolean} - Returns true if the number is a power of 2, otherwise false.
 * @requires `num` to be a non-negative integer.
 */
function isPowerOfTwo(num) {
  const mask = num - 1;
  const result = num & mask;
  return result === 0;
}
