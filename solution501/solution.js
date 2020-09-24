function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findMode = function (root) {
  let answer = [];
  let cur = root, pre = null;
  let base = 0, count = 0, maxCount = 0;

  const update = (x) => {
    if (x === base) {
      ++count;
    } else {
      count = 1;
      base = x;
    }
    if (count === maxCount) {
      answer.push(base);
    }
    if (count > maxCount) {
      maxCount = count;
      answer = [base];
    }
  }


  while (cur !== null) {
    if (cur.left === null) {
      update(cur.val);
      cur = cur.right;
      continue;
    }
    pre = cur.left;
    while (pre.right !== null && pre.right !== cur) {
      pre = pre.right;
    }
    if (pre.right === null) {
      pre.right = cur;
      cur = cur.left;
    } else {
      pre.right = null;
      update(cur.val);
      cur = cur.right;
    }
  }

  return answer;
};
