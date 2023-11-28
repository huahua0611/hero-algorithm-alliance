/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const result = [...nums1, ...nums2];
  const n = result.length;
  result.sort((a, b) => a - b);

  if (n % 2) {
    return result[Math.floor(n / 2)];
  }
  return (result[n / 2] + result[n / 2 - 1]) / 2;
};
