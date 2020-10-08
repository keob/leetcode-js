/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let arr = s.split('');
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (set.has(arr[i])) {
      if (set.has(arr[j])) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
      j--;
    } else {
      i++;
    }
  }

  return arr.join('');
};
