/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  nums1.sort((x, y) => x - y);
  nums2.sort((x, y) => x - y);
  const length1 = nums1.length,
    length2 = nums2.length;
  let index1 = 0,
    index2 = 0;
  const res = [];

  while (index1 < length1 && index2 < length2) {
    const num1 = nums1[index1],
      num2 = nums2[index2];
    if (num1 === num2) {
      if (!res.length || num1 !== res[res.length - 1]) {
        res.push(num1);
      }
      index1++;
      index2++;
    } else if (num1 < num2) {
      index1++;
    } else {
      index2++;
    }
  }

  return res;
};
