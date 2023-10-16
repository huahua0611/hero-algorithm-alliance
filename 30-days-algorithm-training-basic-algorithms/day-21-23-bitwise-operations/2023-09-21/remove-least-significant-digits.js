/**
 * Removes the specified number of least significant digits from a given integer.
 *
 * It is assured that the total number of digits in the integer is greater than the number
 * of digits to be removed.
 *
 * @param {number} integer - The given integer.
 * @param {number} digitsToRemove - The number of least significant digits to remove.
 * @returns {number} - The resulting number after removing the specified number of least
 *                     significant digits.
 */
function removeLeastSignificantDigits(integer, digitsToRemove) {
  // Calculate the divisor
  const divisor = 10 ** digitsToRemove;

  // Perform the division, floor the result, and return it
  return Math.floor(integer / divisor);
}
