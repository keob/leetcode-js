function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;

  let prev = dummyHead;
  let first = prev.next;

  while (first && first.next) {
    let second = first.next;
    let next = second.next;

    second.next = first;
    first.next = next;
    prev.next = second;

    prev = first;
    first = first.next;
  }

  return dummyHead.next;
};
