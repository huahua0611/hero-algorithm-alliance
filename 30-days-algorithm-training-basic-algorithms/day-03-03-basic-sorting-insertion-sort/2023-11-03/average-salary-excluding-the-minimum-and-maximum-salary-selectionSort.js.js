function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i += 1) {
    let minIndex = i;

    for (let j = i; j < n; j += 1) {
      if (arr[j] < arr[minIndex]) {
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
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
  selectionSort(salary);

  const n = salary.length;
  const sum = salary.reduce((x, y) => x + y, 0) - salary[0] - salary[n - 1];

  return sum / (n - 2);
};
