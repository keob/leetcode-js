/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function (a, b) {
  while (b !== 0) {
    let temp = a ^ b;
    b = (a & b) << 1;
    a = temp;
  }

  return a;
};
