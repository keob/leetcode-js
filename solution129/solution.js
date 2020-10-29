function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

const sumNumbers = function (root) {
  return dfs(root, 0);
};

/**
 *
 * @param {TreeNode} root
 * @param {number} prevSum
 */
function dfs(root, prevSum) {
  if (root === null) {
    return 0;
  }

  const sum = prevSum * 10 + root.val;

  if (root.left === null && root.right === null) {
    return sum;
  } else {
    return dfs(root.left, sum) + dfs(root.right, sum);
  }
}