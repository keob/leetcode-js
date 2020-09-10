/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let res = 0, temp = '';
  let index = 0, len = 0;

  for (let i = 0; i < s.length; i++) {
    index = temp.indexOf(s[i]);
    if (index == -1) {
      temp = temp + s[i];
    } else {
      temp = temp.slice(index + 1) + s[i];
    }
    len = temp.length;
    (res < len) && (res = len);
  }

  return res;
};