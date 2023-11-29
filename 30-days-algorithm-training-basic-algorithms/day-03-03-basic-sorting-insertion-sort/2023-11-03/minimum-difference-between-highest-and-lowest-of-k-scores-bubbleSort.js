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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = function (nums, k) {
  bubbleSort(nums);

  let min = Number.MAX_VALUE;

  for (let i = 0; i + k - 1 < nums.length; i += 1) {
    min = Math.min(nums[i + k - 1] - nums[i], min);
  }

  return min;
};
