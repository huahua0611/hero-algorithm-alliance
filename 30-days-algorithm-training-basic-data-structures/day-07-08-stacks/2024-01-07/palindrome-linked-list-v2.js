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
  let now = head;

  while (now) {
    stack.push(now.val);
    now = now.next;
  }

  while (head) {
    if (stack.pop() !== head.val) {
      return false;
    }

    head = head.next;
  }

  return true;
};
