/**
 * Checks the x-th least significant bit of the given number num. If the bit is 1, sets it to 0.
 *
 * @param {number} num - The number to be checked and possibly modified.
 * @param {number} x - The position of the bit to check,
 *                     starting from 1 for the least significant bit.
 * @returns {number} - The resulting number after possibly setting the x-th bit to 0.
 * @requires `num` to be a non-negative integer and `x` to be a positive integer
 *           less than or equal to 32.
 */
function unsetBitIfOne(num, x) {
  const mask = 1 << (x - 1);
  const result = (num | mask) - mask;
  return result;
}
