/**
 * Computes the result of subtraction a - b without using the subtraction operator.
 *
 * @param {number} a - The minuend.
 * @param {number} b - The subtrahend.
 * @returns {number} - The difference of a and b.
 * @requires `a` and `b` to be positive integers less than or equal to (10^9).
 */
function subtractWithoutMinus(a, b) {
  const result = a + ~b + 1;
  return result;
}
