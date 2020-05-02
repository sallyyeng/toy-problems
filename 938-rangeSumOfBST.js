
var rangeSumBST = function (root, L, R) {
  const isWithinMinAndMax = (val) => {
    return val >= L && val <= R
  }
  let result = 0;

  const recurseHelper = (currNode) => {
    if (!currNode) return;

    let currVal = currNode.val;
    let currLeft = currNode.left;
    let currRight = currNode.right;

    if (isWithinMinAndMax(currVal, L, R)) {
      result += currVal
      recurseHelper(currLeft);
      recurseHelper(currRight);
    } else {
      if (currVal < L) {
        recurseHelper(currRight);
      }
      if (currVal > R) {
        recurseHelper(currLeft);
      }
    }
  }

  recurseHelper(root);

  return result;
};


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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */



function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

let nodeOne = new TreeNode(1, null, null);
let nodeSix = new TreeNode(6, null, null);

let thirdRowL1 = new TreeNode(3, nodeOne, null);
let thirdRowL2 = new TreeNode(7, nodeSix, null);
let thirdRowL3 = new TreeNode(13, null, null);
let thirdRowL4 = new TreeNode(18, null, null);

let secondRowL1 = new TreeNode(5, thirdRowL1, thirdRowL2)
let secondRowL2 = new TreeNode(15, thirdRowL3, thirdRowL4)

let inputHead = new TreeNode(10, secondRowL1, secondRowL2);

console.log('result: ', rangeSumBST(inputHead, 6, 10));