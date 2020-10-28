/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
  let a = {};
  let b = [];

  arr.forEach((item) => {
    if (a[item]) {
      a[item] += 1;
    } else {
      a[item] = 1;
    }
  })

  for (key in a) {
    b.push(a[key]);
  }

  return b.length === [...new Set(b)].length;
};
