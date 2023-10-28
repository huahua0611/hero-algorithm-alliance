/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
  const result = [];

  for (let i = 0; i < accounts.length; i += 1) {
    result.push(accounts[i].reduce(((x, y) => x + y), 0));
  }

  return Math.max(...result);
};
