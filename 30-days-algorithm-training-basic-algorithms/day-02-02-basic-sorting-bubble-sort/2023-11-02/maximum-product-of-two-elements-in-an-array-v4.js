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
 * @return {number}
 */
const maxProduct = function (nums) {
  bubbleSort(nums);
  const n = nums.length;
  return (nums[n - 1] - 1) * (nums[n - 2] - 1);
};
