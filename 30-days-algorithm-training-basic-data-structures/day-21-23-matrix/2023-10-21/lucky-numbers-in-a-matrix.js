/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = function (matrix) {
  const minRow = matrix.map((row) => Math.min(...row));
  const maxColumn = new Array(matrix[0].length).fill(0);

  for (let i = 0; i < matrix[0].length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      maxColumn[i] = Math.max(maxColumn[i], matrix[j][i]);
    }
  }

  const result = minRow.filter((value) => maxColumn.includes(value));

  return result;
};
