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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  let minDiffThusFar = Infinity;
  let result;

  const traverse = node => {
    if (!node) return;

    const nodeVal = node.val;
    const currDiff = target - nodeVal;
    const absCurrDiff = Math.abs(currDiff);

    if (absCurrDiff < minDiffThusFar) {
      minDiffThusFar = absCurrDiff;
      result = nodeVal;
    }

    if (currDiff < 0) {
      traverse(node.left);
    } else {
      traverse(node.right);
    }
  };

  traverse(root);
  return result;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// TREE 1 => 6
let fourthRowL1 = new TreeNode(1, null, null);
let fourthRowL2 = new TreeNode(6, null, null);

let thirdRowL1 = new TreeNode(3, fourthRowL1, null);
let thirdRowL2 = new TreeNode(7, fourthRowL2, null);
let thirdRowL3 = new TreeNode(13, null, null);
let thirdRowL4 = new TreeNode(18, null, null);

let secondRowL1 = new TreeNode(5, thirdRowL1, thirdRowL2);
let secondRowL2 = new TreeNode(15, thirdRowL3, thirdRowL4);

let inputHead = new TreeNode(10, secondRowL1, secondRowL2);
console.log("result: ", closestValue(inputHead, 5.75));

// // TREE 2 => 4
// let thirdRowL3 = new TreeNode(1, null, null);
// let thirdRowL4 = new TreeNode(3, null, null);

// let secondRowL1 = new TreeNode(5, null, null);
// let secondRowL2 = new TreeNode(2, thirdRowL3, thirdRowL4);

// let inputHead = new TreeNode(4, secondRowL1, secondRowL2);

// console.log("result: ", closestValue(inputHead, 3.714));
