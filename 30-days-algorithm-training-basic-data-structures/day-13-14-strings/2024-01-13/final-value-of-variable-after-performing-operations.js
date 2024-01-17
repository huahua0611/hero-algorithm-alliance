/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function (operations) {
  const n = operations.length;

  if (n === 0) {
    return 0;
  }

  let x = 0;

  for (let i = 0; i < n; i += 1) {
    if (operations[i] === '++X' || operations[i] === 'X++') {
      x += 1;
    } else {
      x -= 1;
    }
  }

  return x;
};
