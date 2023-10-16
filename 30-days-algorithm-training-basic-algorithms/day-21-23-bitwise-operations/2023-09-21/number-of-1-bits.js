/**
 * @param {number} n - a positive integer
 * @return {number}
 */
let hammingWeight = function (n) {
  let result = 0;

  while (n) {
    n &= n - 1;
    result += 1;
  }

  return result;
};
