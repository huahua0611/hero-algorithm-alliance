/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function (grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] < 0) {
        result += 1;
      }
    }
  }
  return result;
};
