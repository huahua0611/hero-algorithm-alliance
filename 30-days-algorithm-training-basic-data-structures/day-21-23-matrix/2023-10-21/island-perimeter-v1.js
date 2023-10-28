/**
 * @param {number[][]} grid
 * @return {number}
 */
const countPerimeter = function (grid, x, y) {
  const ROW = grid.length;
  const COLUMN = grid[0].length;
  let result = 4;

  if (x - 1 >= 0) {
    if (grid[x - 1][y] === 1) {
      result -= 1;
    }
  }

  if (x + 1 < ROW) {
    if (grid[x + 1][y] === 1) {
      result -= 1;
    }
  }

  if (y - 1 >= 0) {
    if (grid[x][y - 1] === 1) {
      result -= 1;
    }
  }

  if (y + 1 < COLUMN) {
    if (grid[x][y + 1] === 1) {
      result -= 1;
    }
  }

  return result;
};

const islandPerimeter = function (grid) {
  let result = 0;

  const ROW = grid.length;
  const COLUMN = grid[0].length;

  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COLUMN; j += 1) {
      if (grid[i][j] === 1) {
        result += countPerimeter(grid, i, j);
      }
    }
  }

  return result;
};
