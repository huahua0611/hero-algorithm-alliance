/**
 * @param {string} path
 * @return {string}
 */
const pathEncryption = function (path) {
  const result = path.replace(/[.]/g, ' ');

  return result;
};
