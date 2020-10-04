/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  let x = 0, y = s.length - 1;
  while (x < y) {
    [s[x], s[y]] = [s[y], s[x]];
    x++, y--;
  }

  return s;
};