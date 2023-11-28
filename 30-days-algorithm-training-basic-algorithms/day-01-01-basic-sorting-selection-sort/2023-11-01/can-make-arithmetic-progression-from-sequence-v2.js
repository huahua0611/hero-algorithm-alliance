function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i += 1) {
    let max = i;

    for (let j = i + 1; j < n; j += 1) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }

    if (max !== i) {
      const tmp = arr[i];
      arr[i] = arr[max];
      arr[max] = tmp;
    }
  }
}

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = function (arr) {
  // sort arr
  selectionSort(arr);

  const diff = arr[0] - arr[1];

  for (let i = 1; i < arr.length - 1; i += 1) {
    if (arr[i] - arr[i + 1] !== diff) {
      return false;
    }
  }

  return true;
};
