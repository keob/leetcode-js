function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead = head.next;

  head.next = swapPairs(newHead.next);
  newHead.next = head;

  return newHead;
  F;
};
