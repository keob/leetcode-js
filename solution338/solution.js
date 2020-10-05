/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function (num) {
  let result = [0];
  let n = 1;

  while (n <= num) {
    let count = 0;
    let tmp = n;
    while (tmp) {
      if (tmp & 1 == 1) {
        count++;
      }
      tmp >>>= 1;
    }
    n++;
    result.push(count);
  }

  return result;
};
