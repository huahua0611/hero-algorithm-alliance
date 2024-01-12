/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reverseBookList = function (head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }

  return result.reverse();
};
