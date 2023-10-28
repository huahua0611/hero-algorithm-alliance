/**
 * Finds the number of special positions in a given m x n binary matrix.
 *
 * A position (i, j) is called special if mat[i][j] == 1 and all other elements
 * in row i and column j are 0 (rows and columns are 0-indexed).
 *
 * @param {number[][]} matrix - The m x n binary matrix.
 * @returns {number} - The number of special positions in the matrix.
 *
 * @requires m == matrix.length
 * @requires n == matrix[i].length
 * @requires 1 <= m, n <= 100
 * @requires matrix[i][j] is either 0 or 1
 */
function findSpecialPositions(matrix) {
  let result = 0;

  const ROW = matrix.length;
  const COLUMN = matrix[0].length;

  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COLUMN; j += 1) {
      if (matrix[i][j] === 1) {
        if (
          matrix[i].every((value, index) => value === 0 || index === j)
          && matrix.every((value) => value[j] === 0 || value === matrix[i])
        ) {
          result += 1;
        }
      }
    }
  }

  return result;
}
