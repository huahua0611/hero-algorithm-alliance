/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }

  if (x === 1) {
    return 1;
  }

  let left = 0;
  let right = x;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midPower = mid * mid;

    if (midPower === x) {
      return mid;
    }

    let midRight = mid + 1;
    let midRightPower = midRight * midRight;

    if (midRightPower === x) {
      return midRight;
    }

    if (midPower < x) {
      if (midRightPower < x) {
        left = midRight;
        continue;
      }
      return mid;
    }

    right = mid;
  }
};
