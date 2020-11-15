/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
  const stk = [];
  for (const digit of num) {
    while (stk.length > 0 && stk[stk.length - 1] > digit && k) {
      stk.pop();
      k -= 1;
    }
    stk.push(digit);
  }

  for (; k > 0; --k) {
    stk.pop();
  }

  let ans = "";
  let isZero = true;
  for (const digit of stk) {
    if (isZero && digit === '0') {
      continue;
    }
    isZero = false;
    ans += digit;
  }
  return ans === "" ? "0" : ans;
};
