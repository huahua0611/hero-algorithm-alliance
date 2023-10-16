/**
 * Checks if a number is even.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is even, false otherwise.
 */
function isEven(num) {
  // Use bitwise check to determine if num is odd or even
  const result = num & 0b1;
  return result === 0;
}
