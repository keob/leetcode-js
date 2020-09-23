function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint = function (head) {
  const reverse = [];
  const stack = [];
  let node = head;

  while (node) {
    stack.push(node.val);
    node = node.next;
  }

  while (stack.length) {
    reverse.push(stack.pop());
  }

  return reverse;
};
