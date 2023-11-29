/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);

    const n = stones.length;

    if (stones[n - 1] === stones[n - 2]) {
      stones.pop();
      stones.pop();
    } else {
      stones[n - 2] = stones[n - 1] - stones[n - 2];
      stones.pop();
    }
  }

  if (stones.length === 1) {
    return stones[0];
  }

  return 0;
};
