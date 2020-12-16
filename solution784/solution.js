/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function (S) {
  const ans = [];

  const backtrack = (str, i) => {
    if (i === S.length) {
      return ans.push(str);
    }
    const curr = S[i];
    if ((curr >= 'A' && curr <= 'Z') || (curr >= 'a' && curr <= 'z')) {
      const low = str + curr.toLowerCase(),
        high = str + curr.toUpperCase();
      backtrack(low, i + 1);
      backtrack(high, i + 1);
    } else {
      backtrack(str + curr, i + 1);
    }
  };

  backtrack('', 0);

  return ans;
};
