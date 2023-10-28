/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invertTree = function (root) {
  if (root === null) {
    return null;
  }

  const swapChildren = (node) => new TreeNode(node.val, node.right, node.left);

  const newRoot = swapChildren(root);

  newRoot.left = invertTree(newRoot.left);
  newRoot.right = invertTree(newRoot.right);

  return newRoot;
};
