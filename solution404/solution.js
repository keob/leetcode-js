function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = root => {
  if (root == null) {
    return 0;
  }

  let sum = 0;

  /**
   * @param {TreeNode} root
   * @param {boolean} isLeft
   * @returns {number}
   */
  const dfs = (root, isLeft) => {
    if (root.left === null && root.right === null) {
      if (isLeft) {
        sum += root.val;
      }
      return;
    }

    if (root.left) {
      dfs(root.left, true);
    }

    if (root.right) {
      dfs(root.right, false);
    }
  };

  dfs(root, false);

  return sum;
};
