/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertionSortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let sorted = null;
  let current = head;

  while (current) {
    const { next } = current;
    if (!sorted || sorted.val >= current.val) {
      current.next = sorted;
      sorted = current;
    } else {
      let temp = sorted;
      while (temp.next && temp.next.val < current.val) {
        temp = temp.next;
      }
      current.next = temp.next;
      temp.next = current;
    }

    current = next;
  }

  return sorted;
};
