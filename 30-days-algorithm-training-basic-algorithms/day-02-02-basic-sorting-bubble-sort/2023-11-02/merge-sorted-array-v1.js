function merge2(arr1, arr2) {
  arr2.every((value) => arr1.push(value));
}

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  nums1.splice(m);

  merge2(nums1, nums2);

  nums1.sort((a, b) => a - b);
};
