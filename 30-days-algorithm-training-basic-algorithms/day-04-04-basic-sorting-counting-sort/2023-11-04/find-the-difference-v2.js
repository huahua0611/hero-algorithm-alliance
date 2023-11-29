/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  const result = new Array(26).fill(0);

  for (let i = 0; i < s.length; i += 1) {
    result[s.charCodeAt(i) - 'a'.charCodeAt()] += 1;
  }

  for (let j = 0; j < t.length; j += 1) {
    result[t.charCodeAt(j) - 'a'.charCodeAt()] -= 1;

    if (result[t.charCodeAt(j) - 'a'.charCodeAt()] < 0) {
      return t[j];
    }
  }
};
