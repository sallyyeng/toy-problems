/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */

var printTree = function(root) {
  let nodeToLevelsMap = new Map();

  const traverse = (node, i) => {
    if (!node) {
      if (nodeToLevelsMap.has(i)) {
        nodeToLevelsMap.get(i).push(null);
      } else {
        nodeToLevelsMap.set(i, [null]);
      }

      return;
    }

    if (nodeToLevelsMap.has(i)) {
      nodeToLevelsMap.get(i).push(node.val);
    } else {
      nodeToLevelsMap.set(i, [node.val]);
    }

    i += 1;
    traverse(node.left, i);
    traverse(node.right, i);
  };

  traverse(root, 0);

  // remove any empty rows
  nodeToLevelsMap.forEach((levelsArr, key) => {
    if (levelsArr.filter(value => value !== null).length === 0) {
      nodeToLevelsMap.delete(key);
    }
  });

  if (nodeToLevelsMap.size === 1) {
    return [[`${root.val}`]];
  }

  let height = nodeToLevelsMap.size;
  let rowIndentMap = new Map();

  // create matrix based on tree height
  const getColsCount = () => {
    let cols = 0;
    let row = height - 1;

    while (row > -1) {
      rowIndentMap.set(row, cols);
      cols = cols * 2 + 1;
      row--;
    }

    return cols;
  };

  let cols = getColsCount(nodeToLevelsMap);
  let matrix = [];

  for (let i = 0; i < height; i++) {
    matrix[i] = [];

    for (let j = 0; j < cols; j++) {
      matrix[i][j] = "";
    }
  }

  matrix.forEach((rowArr, row) => {
    let startIndex = rowIndentMap.get(row);
    let indentSize = row === 0 ? 0 : rowIndentMap.get(row - 1);

    let nodeIndex = 0;
    for (let col = startIndex; col < cols; col += indentSize + 1) {
      let nodeValue = nodeToLevelsMap.get(row)[nodeIndex];
      if (nodeValue || nodeValue === 0) {
        matrix[row][col] = matrix[row][col].concat(nodeValue);
      }
      nodeIndex++;
    }
  });

  console.log("node: ", nodeToLevelsMap);
  console.log("indent: ", rowIndentMap);
  console.log("cols: ", cols);
  return matrix;
};

const input = {
  val: 3,
  left: null,
  right: {
    val: 30,
    left: {
      val: 10,
      left: null,
      right: {
        val: 15,
        left: null,
        right: {
          val: 45,
          left: null,
          right: null
        }
      }
    },
    right: null
  },
  left: null
};

const result = printTree(input);
console.log("result: ", result);

// const input = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: null
//   },
//   right: null
// };

// const input = {
//   val: "A",
//   left: {
//     val: "B",
//     left: null,
//     right: {
//       val: "D",
//       left: null,
//       right: null
//     }
//   },
//   right: {
//     val: "C",
//     left: null,
//     right: null
//   }
// };

// const input = {
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 3,
//       left: {
//         val: 4,
//         left: null,
//         right: null
//       },
//       right: null
//     },
//     right: null
//   },
//   right: {
//     val: 5,
//     left: null,
//     right: null
//   }
// };

// const input = {
//   val: 1,
//   left: {
//     val: 2,
//     right: null,
//     left: {
//       val: 4,
//       left: {
//         val: 5,
//         left: {
//           val: 6,
//           left: null,
//           right: null
//         },
//         right: null
//       },
//       right: null
//     }
//   },
//   right: {
//     val: 3,
//     left: null,
//     right: null
//   }
// };

// const input = {
//   val: 1,
//   left: {
//     val: 2,
//     left: null,
//     right: {
//       val: 4,
//       left: null,
//       right: null
//     }
//   },
//   right: {
//     val: 3,
//     left: {
//       val: 5,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 6,
//       left: {
//         val: 7,
//         left: null,
//         right: null
//       },
//       right: null
//     }
//   }
// };
