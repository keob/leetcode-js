/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function (S, T) {
  const c = (s, a = []) => {
    for (let i = 0; i < s.length; i++) {
      s[i] === '#' ? a.pop() : a.push(s[i]);
    }
    return a.join('');
  };
  return c(S) === c(T);
};
