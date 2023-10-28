/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function (mat) {
  const n = mat.length;

  let result = 0;

  for (let i = 0; i < n; i += 1) {
    result += mat[i][i] + mat[i][n - 1 - i];
  }

  if (n % 2 === 1) {
    result -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
  }

  return result;
};
