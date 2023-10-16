/**
 * Swaps the values of a and b using XOR operation.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {Object} - An object with the swapped values of a and b.
 * @requires `a` and `b` to be non-negative integers.
 */
function swapValuesUsingXOR(a, b) {
  let a = a ^ b;
  let b = a ^ b;
  a = a ^ b;

  return { a, b };
}
