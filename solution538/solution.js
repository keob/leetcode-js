function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const convertBST = function (root) {
  const convert = node => {
    if (node === null) {
      return 0;
    }

    convert(node.right);
    sum += node.val;
    node.val = sum;
    convert(node.left);
  };

  let sum = 0;

  convert(root);

  return root;
};
