/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x === 0) {
    return x;
  }

  if (x === 1) {
    return x;
  }

  let left = 0;
  let right = x;

  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    const midPower = mid * mid;

    if (midPower === x) {
      return mid;
    }

    if (midPower < x) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return right - 1;
};
