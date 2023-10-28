/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = function (mat) {
  let result = 0;
  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat[0].length; j += 1) {
      if (mat[i][j] === 1) {
        if (
          mat[i].every((value, index) => value === 0 || index === j)
          && mat.every((value, index) => value[j] === 0 || index === i)
        ) {
          result += 1;
        }
      }
    }
  }

  return result;
};
