function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function (root, sum) {
  if (!root) {
    return [];
  }

  const dfs = (temp, res, s, sum, root) => {
    temp.push(root.val);
    s += root.val;

    if (s === sum && root.left === null && root.right === null) {
      res.push(temp.map(i => i));
      return;
    }
    if (root.left) {
      dfs(temp, res, s, sum, root.left);
      temp.pop();
    }
    if (root.right) {
      dfs(temp, res, s, sum, root.right);
      temp.pop();
    }
  }

  let res = [];

  dfs([], res, 0, sum, root);

  return res;
};
