/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  const sSort = [...s].sort();
  const tSort = [...t].sort();

  for (let i = 0; i < s.length; i += 1) {
    if (sSort[i] !== tSort[i]) {
      return tSort[i];
    }
  }

  return tSort[tSort.length - 1];
};
