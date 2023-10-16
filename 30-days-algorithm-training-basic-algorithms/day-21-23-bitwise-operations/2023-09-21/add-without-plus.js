/**
 * Computes the sum of two positive integers a and b without using the addition operator.
 *
 * @param {number} a - The first positive integer.
 * @param {number} b - The second positive integer.
 * @returns {number} - The sum of a and b.
 * @requires `a` and `b` to be positive integers less than or equal to (10^9).
 */
function addWithoutPlus(a, b) {
  const result = a - ~b - 1;
  return result;
}
