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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = function (nums, k) {
  insertionSort(nums);

  let min = Number.MAX_VALUE;

  for (let i = 0; i + k - 1 < nums.length; i += 1) {
    min = Math.min(nums[i + k - 1] - nums[i], min);
  }

  return min;
};
