/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  const n = nums.length;

  if (n === 1) {
    return;
  }

  for (let i = 0; i < n - 1; i += 1) {
    let minIndex = i;

    for (let j = i + 1; j < n; j += 1) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const tmp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = tmp;
    }
  }
};
