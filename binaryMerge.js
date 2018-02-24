/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

let t1 = new TreeNode(1);
t1.left = new TreeNode(2);
t1.left.left = new TreeNode(3);
t1.left.right = null;
t1.right = new TreeNode(4);
t1.right.left = null;
t1.right.right = null;

let t2 = new TreeNode(1);
t2.left = new TreeNode(2);
t2.left.left = null;
t2.left.right = new TreeNode(3);
t2.right = new TreeNode(4);
t2.left.right = null;
t2.right.right = new TreeNode(5);

const mergeTrees = function(t1, t2) {

  // base case: when node is null (i.e. no more children to traverse);
  if (t1 === null) { return t2; }
  if (t2 === null) { return t1; }

  t1.val += t2.val;

  t1.left = mergeTrees(t1.left, t2.left);
  t2.left = mergeTrees(t1.right, t2.right);

  return t1;
};
