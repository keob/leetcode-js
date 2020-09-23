/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  if (nums.length === 0) {
    return [];
  }

  let pre = [[], [nums[0]]]

  for (let i = 1; i < nums.length; i++) {
    let arr = pre.map(v => {
      let res = v.slice(0)
      res.push(nums[i])
      return res
    })
    pre = [...pre, ...arr]
  }

  return pre;
};
