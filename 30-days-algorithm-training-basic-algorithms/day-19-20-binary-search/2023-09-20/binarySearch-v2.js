/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = function (nums, target) {
  let left = -1;
  let right = nums.length;

  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return -1;
};
