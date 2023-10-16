/**
 * Retrieves the last X bits of a given number and returns the value in decimal.
 *
 * @param {number} num - The number to process.
 * @param {number} x - The number of bits to retrieve from the end.
 * @returns {number} - The decimal value of the last X bits.
 */
function getDecimalValueOfLastXBits(num, x) {
  // This function utilizes the bitwise AND operator (&) and a bitmask to obtain the last X bits.
  const mask = (1 << x) - 1;
  const result = num & mask;
  return result;
}
