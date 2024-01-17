/**
 * @param {string} string
 * @param {number} length
 * @return {boolean}
 */
function isDistinctCharacters(string, length) {
  if (string.length !== length) {
    throw new RangeError(`Input string length ${string.length} incorrect not equal ${length}`);
  }

  const result = new Array(26).fill(0);

  for (let i = 0; i < length; i += 1) {
    result[string.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
  }

  for (let i = 0; i < result.length; i += 1) {
    if (result[i] > 1) {
      return false;
    }
  }

  return true;
}

/**
 * @param {string} s
 * @return {number}
 */
const countGoodSubstrings = function (s) {
  const length = 3;

  if (s.length < length) {
    return 0;
  }

  const n = s.length;
  let result = 0;

  for (let i = 0; i + 3 <= n; i += 1) {
    if (isDistinctCharacters(s.slice(i, i + length), length)) {
      result += 1;
    }
  }

  return result;
};
