/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = function (s) {
  let result = 0;
  let size = 0;
  for (let i = 0; i < s.length; i += 1) {
    const ch = s[i];

    if (ch === '(') {
      size += 1;
      result = Math.max(result, size);
    } else if (ch === ')') {
      size -= 1;
    }
  }

  return result;
};
