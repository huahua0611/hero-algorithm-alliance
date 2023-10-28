/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function (grid) {
  const ROW = grid.length;
  const COLUMN = grid[0].length;

  let result = 0;

  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COLUMN; j += 1) {
      if (grid[i][j] < 0) {
        result += COLUMN - j;
        break;
      }
    }
  }

  return result;
};
