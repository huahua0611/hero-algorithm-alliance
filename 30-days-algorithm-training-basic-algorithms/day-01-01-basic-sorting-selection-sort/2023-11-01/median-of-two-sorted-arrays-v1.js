function helpPush(arr1, arr2, i) {
  // push arr2 from i index element to arr1

  while (i < arr2.length) {
    arr1.push(arr2[i]);
    i += 1;
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const i = nums1.length;
  const j = nums2.length;
  const result = [];
  let x = 0;
  let y = 0;
  let z = 0;

  if (i === 0) {
    if (j % 2) {
      return nums2[Math.floor(j / 2)];
    }
    return (nums2[j / 2] + nums2[j / 2 - 1]) / 2;
  }

  if (j === 0) {
    if (i % 2) {
      return nums1[Math.floor(i / 2)];
    }
    return (nums1[i / 2] + nums1[i / 2 - 1]) / 2;
  }

  while (z < i + j) {
    if (nums1[x] < nums2[y]) {
      result.push(nums1[x]);
      x += 1;
      z += 1;

      if (x >= i) {
        helpPush(result, nums2, y);

        if ((i + j) % 2) {
          return result[Math.floor((i + j) / 2)];
        }
        return (result[(i + j) / 2] + result[(i + j) / 2 - 1]) / 2;
      }
    } else {
      result.push(nums2[y]);
      y += 1;
      z += 1;
    }
    if (y >= j) {
      helpPush(result, nums1, x);

      if ((i + j) % 2) {
        return result[Math.floor((i + j) / 2)];
      }
      return (result[(i + j) / 2] + result[(i + j) / 2 - 1]) / 2;
    }
  }
};
