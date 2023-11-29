/**
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
  salary.sort((a, b) => a - b);

  const n = salary.length;
  const sum = salary.reduce((x, y) => x + y, 0) - salary[0] - salary[n - 1];

  return sum / (n - 2);
};
