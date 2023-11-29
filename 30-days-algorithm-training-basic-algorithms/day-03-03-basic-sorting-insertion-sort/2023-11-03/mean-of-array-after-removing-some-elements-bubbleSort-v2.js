function bubbleSort(arr) {
  const n = arr.length;

  for (let i = n - 1; i > 0; i -= 1) {
    let flag = true;

    for (let j = 0; j < i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;

        flag = false;
      }
    }

    if (flag) {
      break;
    }
  }
}

/**
 * @param {number[]} arr
 * @return {number}
 */
const trimMean = function (arr) {
  bubbleSort(arr);
  const n = arr.length;
  const cut = n / 20;

  let sum = 0;

  for (let i = cut; i < n - cut; i += 1) {
    sum += arr[i];
  }

  return sum / (n - 2 * cut);
};
