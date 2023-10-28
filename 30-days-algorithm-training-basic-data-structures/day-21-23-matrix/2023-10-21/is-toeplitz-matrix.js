/**
 * Checks if a given matrix is a Toeplitz Matrix.
 * A Toeplitz (or diagonal-constant) matrix is a matrix in which each descending diagonal
 * from left to right is constant, i.e., all elements in the same diagonal are equal.
 *
 * @param {number[][]} matrix - A 2D array representing the matrix.
 * @returns {boolean} - True if the matrix is a Toeplitz Matrix, false otherwise.
 * @requires The number of rows and columns to be > 0 and <= 300.
 * @requires Each element of the matrix to be an integer between 0 and 99.
 */
function isToeplitzMatrix(matrix) {
  if (matrix.length === 0) {
    return false;
  }

  const ROW = matrix.length;
  const COLUMN = matrix[0].length;

  for (let i = 1; i < ROW; i += 1) {
    for (let j = 1; j < COLUMN; j += 1) {
      if (matrix[i - 1][j - 1] !== matrix[i][j]) {
        return false;
      }
    }
  }

  return true;
}
