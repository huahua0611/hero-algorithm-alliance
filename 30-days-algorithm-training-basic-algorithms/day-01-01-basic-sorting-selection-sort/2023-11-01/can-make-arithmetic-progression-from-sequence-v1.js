/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b);

  const diff = arr[0] - arr[1];

  for (let i = 1; i < arr.length - 1; i += 1) {
    if (arr[i] - arr[i + 1] !== diff) {
      return false;
    }
  }

  return true;
};
