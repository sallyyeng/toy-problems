const BinaryTreeNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

const findLargest = (tree) => {
  if (tree.right) { return findLargest(tree.right); }
  return tree.value;
};

const secondLargestNode = (tree) => {

  if (tree.right && !tree.right.right && !tree.right.left) {
    return tree.value;
  } else if (tree.left && !tree.right) {
    return findLargest(tree.left);
  } else {
    return secondLargestNode(tree.right);
  }
};
