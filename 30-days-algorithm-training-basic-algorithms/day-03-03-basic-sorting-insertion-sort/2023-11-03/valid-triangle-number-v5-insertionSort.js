function insertionSort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
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
 * @return {number}
 */
const triangleNumber = function (nums) {
  insertionSort(nums);

  let result = 0;

  for (let i = 0; i < nums.length - 2; i += 1) {
    for (let j = i + 1; j < nums.length - 1; j += 1) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] > nums[k]) {
          result += 1;
        }
      }
    }
  }

  return result;
};
