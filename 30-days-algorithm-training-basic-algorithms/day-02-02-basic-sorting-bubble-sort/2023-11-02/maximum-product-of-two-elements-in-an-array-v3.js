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
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  selectionSort(nums);
  const n = nums.length;
  return (nums[n - 1] - 1) * (nums[n - 2] - 1);
};
