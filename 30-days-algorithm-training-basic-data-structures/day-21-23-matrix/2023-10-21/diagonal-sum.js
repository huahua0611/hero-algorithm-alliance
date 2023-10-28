/**
 * Computes the sum of the main and secondary diagonal elements of a given square matrix.
 * Duplicates at the intersection of the main and secondary diagonals are counted only once.
 *
 * @param {number[][]} matrix - The square matrix.
 * @returns {number} - The sum of the unique main and secondary diagonal elements.
 * @requires `matrix` to be a non-empty square matrix with side length > 0 and <= 100,
 *           and each element in `matrix` to be an integer between -10^9 and 10^9.
 */
function diagonalSum(matrix) {
  if (matrix.length === 0) {
    return 0;
  }

  const ROW = matrix.length;
  const COLUMN = matrix[0].length;
  let result = 0;

  for (let i = 0; i < ROW && i < COLUMN; i += 1) {
    result += matrix[i][i];
  }

  for (let i = 0; i < ROW && i < COLUMN; i += 1) {
    if (ROW - i - 1 !== i) {
      result += matrix[i][ROW - i - 1];
    }
  }

  return result;
}

