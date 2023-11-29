/**
 * @param {number[]} arr
 * @return {number}
 */
const trimMean = function (arr) {
  arr.sort((a, b) => a - b);

  const n = arr.length;
  const cut = n / 20;

  let sum = 0;

  for (let i = cut; i < n - cut; i += 1) {
    sum += arr[i];
  }

  return sum / (n - 2 * cut);
};
