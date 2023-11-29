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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = function (nums, k) {
  selectionSort(nums);

  let min = Number.MAX_VALUE;

  for (let i = 0; i + k - 1 < nums.length; i += 1) {
    min = Math.min(nums[i + k - 1] - nums[i], min);
  }

  return min;
};
