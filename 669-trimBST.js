/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */

const trimBST = function(root, L, R) {
  // if root is null, return null
  if (root === null) { return null; }

  // if root is L
  if (root.val === L) {
    // set left to null
    root.left = null;
    // assign right -> trim right
    root.right = trimBST(root.right, L, R);
  }

  // if root is R, trim only L side
  if (root.val === R) {
    // set right to null
    root.right = null;
    // assign left -> trim left
    root.left = trimBST(root.left, L, R);
  }

  // if root is < range, trim right
  if (root.val < L) { return trimBST(root.right, L, R); }

  // if root is > range, trim left side
  if (root.val > R) { return trimBST(root.left, L, R); }

  // if value within range, assign left -> trim(left) and right -> trim(right)
  if (root.val > L && root.val < R) {
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
  }
  return root;
};
