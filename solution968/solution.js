function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minCameraCover = function (root) {
  const dfs = root => {
    if (!root) {
      return [Math.floor(Number.MAX_SAFE_INTEGER / 2), 0, 0];
    }

    const [la, lb, lc] = dfs(root.left);
    const [ra, rb, rc] = dfs(root.right);
    const a = lc + rc + 1;
    const b = Math.min(a, Math.min(la + rb, ra + lb));
    const c = Math.min(a, lb + rb);

    return [a, b, c];
  };

  return dfs(root)[1];
};
