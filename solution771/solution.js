/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function (J, S) {
  let j = J.split('');
  let s = s.split('');

  return s.filter(item => j.includes(item)).length;
};
