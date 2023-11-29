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
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
  salary.sort((a, b) => a - b);

  const n = salary.length;
  const sum = salary.reduce((x, y) => x + y, 0) - salary[0] - salary[n - 1];

  return sum / (n - 2);
};
