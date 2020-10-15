function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
  if (root === null) {
    return root;
  }

  let cur = root;

  while (cur.left !== null) {
    let head = cur;
    while (head !== null) {
      head.left.next = head.right;
      if (head.next != null) {
        head.right.next = head.next.left;
      }
      head = head.next;
    }
    cur = cur.left;
  }

  return root;
};
