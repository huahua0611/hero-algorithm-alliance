/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const rowAndMaximumOnes = function (mat) {
  const ROW = mat.length;
  const COLUMN = mat[0].length;

  let index = 0;
  let maxValue = 0;

  for (let i = 0; i < ROW; i += 1) {
    let count = 0;

    for (let j = 0; j < COLUMN; j += 1) {
      count += mat[i][j];
    }

    if (count > maxValue) {
      index = i;
      maxValue = count;
    }
  }

  return [index, maxValue];
};
