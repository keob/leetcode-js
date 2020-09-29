function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function (root) {
  let nums = [];

  let postOrder = (root) => {
    root.left && postOrder(root.left);
    root.right && postOrder(root.right);
    nums.push(root.val);
  }

  root && postOrder(root);

  return nums;
};