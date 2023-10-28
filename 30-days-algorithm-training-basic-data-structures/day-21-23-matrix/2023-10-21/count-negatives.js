/**
 * Counts the number of negative numbers in a given m x n matrix.
 *
 * @param {number[][]} grid - The m x n matrix.
 * @returns {number} - The count of negative numbers in the matrix.
 * @requires `grid` to be a non-empty m x n matrix with m, n > 0 and <= 100,
 *           and each element in `grid` to be an integer between -100 and 100.
 */
function countNegatives(grid) {
  if (grid.length === 0) {
    return 0;
  }

  const ROW = grid.length;
  const COLUMN = grid[0].length;
  let result = 0;

  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COLUMN; j += 1) {
      if (grid[i][j] < 0) {
        result += 1;
      }
    }
  }

  return result;
}

