function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
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
const triangleNumber = function (nums) {
  bubbleSort(nums);

  let result = 0;

  for (let i = 0; i < nums.length - 2; i += 1) {
    for (let j = i + 1; j < nums.length - 1; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        if (nums[i] + nums[j] > nums[k]) {
          result += 1;
        }
      }
    }
  }

  return result;
};
