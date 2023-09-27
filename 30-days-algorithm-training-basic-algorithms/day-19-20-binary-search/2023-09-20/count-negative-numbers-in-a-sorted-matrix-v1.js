/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function (grid) {
  const row = grid.length;
  const column = grid[0].length;
  let result = 0;

  for (let i = 0; i < column; i += 1) {
    let top = -1;
    let bot = row;

    while (top + 1 < bot) {
      const mid = top + Math.floor((bot - top) / 2);

      if (grid[mid][i] < 0) {
        bot = mid;
      } else {
        top = mid;
      }
    }

    result = result + row - bot;
  }

  return result;
};
