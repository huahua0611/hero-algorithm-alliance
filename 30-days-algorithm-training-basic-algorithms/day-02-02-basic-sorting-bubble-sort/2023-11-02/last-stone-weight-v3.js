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
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    bubbleSort(stones);

    const n = stones.length;

    if (stones[n - 1] === stones[n - 2]) {
      stones.pop();
      stones.pop();
    } else {
      stones[n - 2] = stones[n - 1] - stones[n - 2];
      stones.pop();
    }
  }

  if (stones.length === 1) {
    return stones[0];
  }

  return 0;
};
