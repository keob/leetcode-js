/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function (str) {
  let num = parseInt(str);
  let max = Math.pow(2, 31) - 1;
  let min = -max - 1;

  if (Number.isNaN(num)) {
    num = 0;
  } else if (num < min) {
    num = min;
  } else if (num > max) {
    num = max;
  }
  return num;
};