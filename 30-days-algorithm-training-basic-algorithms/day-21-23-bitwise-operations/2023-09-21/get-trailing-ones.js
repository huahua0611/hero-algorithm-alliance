/**
 * Retrieves the trailing consecutive ones in the binary representation of the given number num
 * and returns them as a decimal number.
 *
 * @param {number} num - The number to be checked.
 * @returns {number} - The decimal representation of trailing consecutive ones in binary.
 * @requires `num` to be a non-negative integer less than or equal to (10^9).
 */
function getTrailingOnes(num) {
  const mask = num + 1;
  const result = (num ^ mask) >> 1;
  return result;
}
