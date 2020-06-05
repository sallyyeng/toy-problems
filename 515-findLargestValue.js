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
var largestValues = function(root) {
  const result = [];

  if (!root) return result;

  const queue = [root];

  while (queue.length > 0) {
    let max = Number.MIN_SAFE_INTEGER;
    const currRowSize = queue.length;

    for (let i = 0; i < currRowSize; i++) {
      const nextNode = queue.shift();
      const { val, left, right } = nextNode;

      if (val > max) max = val;

      left && queue.push(left);
      right && queue.push(right);
    }

    result.push(max);
  }

  return result;
};

class Tree {
  constructor(val, left, right) {
    this.val = val ? val : null;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }

  get largestValues() {
    return largestValues(this);
  }
}

const thirdOne = new Tree(5);
const thirdTwo = new Tree(3);
const thirdThree = new Tree(9);

const secondOne = new Tree(3, thirdOne, thirdTwo);
const secondTwo = new Tree(2, null, thirdThree);

const testTree = new Tree(1, secondOne, secondTwo);

console.log("result: ", testTree.largestValues);
