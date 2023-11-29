/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  let result = 0;

  for (let i = 0; i < s.length; i += 1) {
    result ^= s.charCodeAt(i) ^ t.charCodeAt(i);
  }

  result ^= t.charCodeAt(t.length - 1);

  return String.fromCharCode(result);
};
