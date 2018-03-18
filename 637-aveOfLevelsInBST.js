/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const TreeNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

TreeNode.prototype.insertLeft = function(value) {
  this.left = new TreeNode(value);
  return this.left;
};

TreeNode.prototype.insertRight = function(value) {
  this.right = new TreeNode(value);
  return this.right;
};

const Queue = function() {
  this.storage = {};
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end++] = value;
};

Queue.prototype.dequeue = function() {
  let result = this.storage[this.start];
  delete this.storage[this.start];
  if (this.size) { this.start++; }
  return result;
};

Queue.prototype.size = function() {
  return this.end - this.start;
};

const averageOfLevels = function(root) {
  let queue = new Queue();
  let previousDepth = 0;
  let sum = 0;
  let count = 0;
  let result = [];
  let current = [root, 0];

  while (current) {
    [node, depth] = current;

    // handle average tracking
    if (depth !== previousDepth) {
      console.log(typeof (sum / count));
      result.push(sum / count);
      sum = 0;
      count = 0;
      previousDepth++;
    }
    sum += node.value;
    count++;

    node.left ? queue.enqueue([node.left, depth + 1]) : null;
    node.right ? queue.enqueue([node.right, depth + 1]) : null;
    current = queue.dequeue();
  }
  result.push(sum / count);
  return result;
};
