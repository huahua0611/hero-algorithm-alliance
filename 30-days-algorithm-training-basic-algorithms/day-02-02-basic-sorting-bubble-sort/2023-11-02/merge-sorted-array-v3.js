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
      return;
    }
  }
}
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i += 1) {
    nums1[m + i] = nums2[i];
  }

  bubbleSort(nums1);
};
