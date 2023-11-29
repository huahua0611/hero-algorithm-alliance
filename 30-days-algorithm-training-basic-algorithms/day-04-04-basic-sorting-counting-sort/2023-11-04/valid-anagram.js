/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const arrS = new Array(26).fill(0);
  const arrT = new Array(26).fill(0);

  for (let i = 0; i < s.length; i += 1) {
    arrS[s.charCodeAt(i) - 97] += 1;
    arrT[t.charCodeAt(i) - 97] += 1;
  }

  return JSON.stringify(arrS) === JSON.stringify(arrT);
};
