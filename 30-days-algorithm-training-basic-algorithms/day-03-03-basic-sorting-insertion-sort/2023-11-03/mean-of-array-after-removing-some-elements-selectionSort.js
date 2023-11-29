function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i += 1) {
    let minIndex = i;

    for (let j = i + 1; j < n; j += 1) {
      if (arr[j] > arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
  }
}

/**
 * @param {number[]} arr
 * @return {number}
 */
const trimMean = function (arr) {
  selectionSort(arr);

  const n = arr.length;
  const cut = n / 20;

  let sum = 0;

  for (let i = cut; i < n - cut; i += 1) {
    sum += arr[i];
  }

  return sum / (n - 2 * cut);
};
