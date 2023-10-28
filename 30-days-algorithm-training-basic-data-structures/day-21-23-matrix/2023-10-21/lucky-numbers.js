/**
 * Finds all lucky numbers in a given m x n matrix.
 *
 * A lucky number is an element of the matrix such that it is the minimum element in its row
 * and maximum in its column.
 *
 * @param {number[][]} matrix - The m x n matrix containing distinct numbers.
 * @returns {number[]} - An array of all lucky numbers in the matrix.
 *
 * @requires m == matrix.length
 * @requires n == matrix[i].length
 * @requires 1 <= n, m <= 50
 * @requires 1 <= matrix[i][j] <= 105
 * @requires All elements in the matrix are distinct.
 */
function luckyNumbers(matrix) {
  if (matrix.length === 0) {
    return [];
  }

  const ROW = matrix.length;
  const COLUMN = matrix[0].length;

  const rowMin = new Array(ROW).fill(Number.MAX_VALUE);
  const columnMax = new Array(COLUMN).fill(Number.MIN_VALUE);
  const result = [];

  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COLUMN; j += 1) {
      rowMin[i] = Math.min(rowMin[i], matrix[i][j]);
      columnMax[j] = Math.max(columnMax[j], matrix[i][j]);
    }
  }

  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COLUMN; j += 1) {
      if (matrix[i][j] === rowMin[i] && matrix[i][j] === columnMax[j]) {
        result.push(matrix[i][j]);
      }
    }
  }

  return result;
}
