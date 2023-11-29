function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i += 1) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = current;
  }
}

/**
 * @param {number[]} arr
 * @return {number}
 */
const trimMean = function (arr) {
  insertionSort(arr);

  const n = arr.length;
  const cut = n / 20;

  let sum = 0;

  for (let i = cut; i < n - cut; i += 1) {
    sum += arr[i];
  }

  return sum / (n - 2 * cut);
};
