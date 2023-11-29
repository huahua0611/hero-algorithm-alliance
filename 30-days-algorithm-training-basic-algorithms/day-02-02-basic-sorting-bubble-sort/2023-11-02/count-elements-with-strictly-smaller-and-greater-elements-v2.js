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
const countElements = function (nums) {
  bubbleSort(nums);

  let result = 0;
  for (let i = 1; i < nums.length - 1; i += 1) {
    if (nums[i] === nums[0] || nums[i] === nums[nums.length - 1]) {
      continue;
    }

    result += 1;
  }

  return result;
};
