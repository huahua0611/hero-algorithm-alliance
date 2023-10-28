/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
  let result = 0;
  const ROW = grid.length;
  const COLUMN = grid[0].length;

  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COLUMN; j += 1) {
      if (grid[i][j] === 1) {
        result += 4;

        if (i > 0 && grid[i - 1][j] === 1) result -= 2;
        if (j > 0 && grid[i][j - 1] === 1) result -= 2;
      }
    }
  }

  return result;
};
