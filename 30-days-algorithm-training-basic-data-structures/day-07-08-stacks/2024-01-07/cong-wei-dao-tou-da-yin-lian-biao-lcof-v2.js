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
  const tmp = [];
  while (head) {
    tmp.push(head.val);
    head = head.next;
  }

  const result = [];
  while (tmp.length > 0) {
    result.push(tmp.pop());
  }

  return result;
};
