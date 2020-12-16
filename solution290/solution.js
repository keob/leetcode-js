/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
  const word2ch = new Map();
  const ch2word = new Map();
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  for (const [i, word] of words.entries()) {
    const ch = pattern[i];
    if (
      (word2ch.has(word) && word2ch.get(word) != ch) ||
      (ch2word.has(ch) && ch2word.get(ch) !== word)
    ) {
      return false;
    }
    word2ch.set(word, ch);
    ch2word.set(ch, word);
  }
  return true;
};
