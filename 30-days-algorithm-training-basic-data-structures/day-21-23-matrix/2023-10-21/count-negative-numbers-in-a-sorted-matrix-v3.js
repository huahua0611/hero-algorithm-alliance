/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function (grid) {
  const ROW = grid.length;
  const COLUMN = grid[0].length;

  let i = 0;
  let j = COLUMN - 1;
  let result = 0;

  while (i < ROW && j >= 0) {
    if (grid[i][j] < 0) {
      result += ROW - i;
      j -= 1;
    } else {
      i += 1;
    }
  }

  return result;
};
