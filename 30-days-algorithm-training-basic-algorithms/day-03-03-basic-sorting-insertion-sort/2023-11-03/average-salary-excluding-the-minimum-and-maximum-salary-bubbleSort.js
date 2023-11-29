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
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
  bubbleSort(salary);

  const n = salary.length;
  const sum = salary.reduce((x, y) => x + y, 0) - salary[0] - salary[n - 1];

  return sum / (n - 2);
};
