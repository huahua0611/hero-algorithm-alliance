function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i += 1) {
    let minIndex = i;

    for (let j = i + 1; j < n; j += 1) {
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
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    selectionSort(stones);

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
