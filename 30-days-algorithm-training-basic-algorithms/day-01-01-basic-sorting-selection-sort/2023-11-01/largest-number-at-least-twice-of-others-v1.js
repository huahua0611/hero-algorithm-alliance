/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function (nums) {
  let maxIndex = 0;
  let secondMaxIndex = 0;

  if (nums[0] > nums[1]) {
    maxIndex = 0;
    secondMaxIndex = 1;
  } else {
    maxIndex = 1;
    secondMaxIndex = 0;
  }

  for (let i = 2; i < nums.length; i += 1) {
    if (nums[i] > nums[maxIndex]) {
      secondMaxIndex = maxIndex;
      maxIndex = i;
    } else if (nums[i] > nums[secondMaxIndex]) {
      secondMaxIndex = i;
    }
  }

  if (nums[maxIndex] >= 2 * nums[secondMaxIndex]) {
    return maxIndex;
  }

  return -1;
};
