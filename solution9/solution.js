/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  x += '';
  let len = x.length;

  for (let i = 0; i < ((len + 1) / 2) | 0; i++) {
    if (x[i] != x[len - i - 1]) {
      return false;
    }
  }

  return true;
};