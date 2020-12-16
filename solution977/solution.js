/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function (A) {
  const len = A.length,
    res = new Array(len);
  let left = 0,
    right = len - 1;

  while (left <= right) {
    if (A[left] < 0 && -A[left] > A[right]) {
      res[right - left] = A[left++] ** 2;
    } else {
      res[right - left] = A[right--] ** 2;
    }
  }

  return res;
};
