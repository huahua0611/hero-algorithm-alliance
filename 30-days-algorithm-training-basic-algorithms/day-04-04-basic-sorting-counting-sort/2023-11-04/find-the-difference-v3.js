/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  let sum = 0;

  for (let i = 0; i < s.length; i += 1) {
    sum += s.charCodeAt(i) - t.charCodeAt(i);
  }

  return String.fromCharCode(t.charCodeAt(t.length - 1) - sum);
};
