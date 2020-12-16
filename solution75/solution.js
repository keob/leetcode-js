/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  let i = 0,
    count = 0;
  while (count < nums.length) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
      i++;
    } else if (nums[i] === 2) {
      nums.splice(i, 1);
      nums.push(2);
    } else {
      i++;
    }
    count++;
  }
  return nums;
};
