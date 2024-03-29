/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  const stack = [];

  while (head) {
    stack.push(head.val);
    head = head.next;
  }

  return stack.join('') === stack.reverse().join('');
};
