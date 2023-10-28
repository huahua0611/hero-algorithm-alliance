/**
 * Computes the maximum wealth among a list of customers.
 *
 * @param {number[][]} accounts - A 2D array where accounts[i][j] is the amount of money
 *                                the i-th customer has in the j-th bank.
 * @returns {number} - The maximum wealth a customer can have.
 * @requires The number of customers and the number of banks per customer to be > 0 and <= 100.
 * @requires Each amount of money to be an integer between 1 and 100.
 */
function maximumWealth(accounts) {
  if (accounts.length === 0) {
    return 0;
  }

  let maxValue = 0;

  for (let i = 0; i < accounts.length; i += 1) {
    const sumValue = accounts[i].reduce((x, y) => x + y, 0);

    if (sumValue > maxValue) {
      maxValue = sumValue;
    }
  }

  return maxValue;
}
