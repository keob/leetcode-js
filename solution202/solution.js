/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  if (n === 1) {
    return true
  }

  const list = new Set()

  while (!list.has(n)) {
    list.add(n);
    let sum = 0;
    while (n) {
      const value = n % 10;
      sum += (value * value);
      n = parseInt(n / 10);
    }
    if (sum === 1) {
      return true;
    }
    n = sum;
  }

  return false;
};