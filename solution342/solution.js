/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = function (num) {
  let i = 1;

  while (i < num) {
    i *= 4;
  }

  return i == num;
};
