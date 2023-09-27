/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function (grid) {
  const ROW = grid.length;
  const COLUMN = grid[0].length;
  let result = 0;

  for (let i = 0; i < ROW; i += 1) {
    let left = -1;
    let right = COLUMN;

    while (left + 1 < right) {
      const MID = left + Math.floor((right - left) / 2);

      if (grid[i][MID] < 0) {
        right = MID;
      } else {
        left = MID;
      }
    }

    result = result + COLUMN - right;
  }

  return result;
};
