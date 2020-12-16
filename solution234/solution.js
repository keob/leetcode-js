function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  const vals = [];

  while (head !== null) {
    vals.push(head.val);
    head = head.next;
  }

  for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
    if (vals[i] !== vals[j]) {
      return false;
    }
  }

  return true;
};
