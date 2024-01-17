/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
  let x = 1;
  let y = 0;

  const n = s.length;

  for (let i = 0; i < n; i += 1) {
    if (s.charAt(i) === 'A') {
      x = 2 * x + y;
    } else if (s.charAt(i) === 'B') {
      y = 2 * y + x;
    }
  }

  return x + y;
};
