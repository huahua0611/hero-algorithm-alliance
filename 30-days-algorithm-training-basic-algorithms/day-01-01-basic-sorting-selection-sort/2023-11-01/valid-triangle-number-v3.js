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
 * @param {number[]} arr
 * @return {number} return first bigger or equal target index
 */
function binarySearch(arr, start, end, target) {
  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (arr[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  return start;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const triangleNumber = function (nums) {
  if (nums.length < 3) {
    return 0;
  }

  // sort nums
  selectionSort(nums);

  const n = nums.length;
  let result = 0;

  for (let i = 0; i < n - 1; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const target = nums[i] + nums[j];

      result += binarySearch(nums, j, n, target) - j;
    }
  }

  return result;
};
