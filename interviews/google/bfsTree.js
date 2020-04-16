// Data Structure //
// const Tree = {
//   TreeA: {
//     parent: null, // if parent is null, that is the root
//     children: [TreeB, TreeC, TreeD],
//     notify: function() {}
//   },
//   TreeB: {
//     parent: TreeA,
//     children: [TreeE, TreeF],
//     notify: function() {}
//   }
// }

class Tree {
  constructor(key) {
    this._parents = new Map([
      [
        key,
        {
          value: key,
          parent: null,
          children: [],
          notify: null
        }
      ]
    ]);
  }

  // notify is a cb invoked when subtree is removed
  addNode(key, parent, notify) {
    if (!this._parents.has(parent)) throw new Error("parent doesnt exist");

    const newTree = { value: key, parent, children: [], notify };

    // update parent's child arr
    const newParent = this._parents.get(parent);
    this._parents.set(parent, {
      ...newParent,
      children: [...newParent.children, newTree]
    });

    // add new parent to this._parents
    this._parents.set(key, newTree);
  }

  getChildren(key) {
    return this._parents.get(key).children;
  }

  getStore() {
    return this._parents;
  }

  // requirement: use breadth first search
  removeSubTree(key) {
    let bfsQueue = [key];

    let parentKey = this._parents.get(key).parent;
    let parentNode = this._parents.get(parentKey);

    let newChildren = parentNode.children.filter(({ value }) => value !== key);

    this._parents.set(parentKey, {
      ...parentNode,
      children: newChildren
    });

    while (bfsQueue.length > 0) {
      let currKey = bfsQueue.shift();
      let currNode = this._parents.get(currKey);
      this._parents.delete(currKey);
      currNode.notify();

      let currChildren = currNode.children;

      currChildren.forEach(({ value }) => {
        bfsQueue.push(value);
      });
    }
  }
}

//   a
//   |\
//   b c
//  /|\
// d e f

// build tree above
const treeA = new Tree("a");
treeA.addNode("b", "a", () => console.log("b has been removed!"));
treeA.addNode("c", "a", () => console.log("c has been removed!"));
treeA.addNode("d", "b", () => console.log("d has been removed!"));
treeA.addNode("e", "b", () => console.log("e has been removed!"));
treeA.addNode("f", "b", () => console.log("f has been removed!"));
treeA.addNode("g", "f", () => console.log("g has been removed!"));

// ************************************************************* //
// TESTS
// ************************************************************* //

// test inputs
let parents = ["a", "b", "c", "d", "e"];
let parentToChildMap = {
  a: ["b", "c"],
  b: ["d", "e", "f"],
  c: []
};
let treeStructure = treeA.getStore();

// addNode tests
parents.forEach(parent => {
  if (treeStructure.has(parent)) {
    console.log(`PASS: ${parent} is in tree`);
  } else {
    console.log(`FAIL: ${parent} is not in tree`);
  }
});

Object.keys(parentToChildMap).forEach((parent, key) => {
  let actualChildren = treeStructure.get(parent).children;

  actualChildren.forEach(({ value: actualChildValue }) => {
    let expectedChildren = parentToChildMap[parent];
    let indexOfActualChild = expectedChildren.indexOf(actualChildValue);

    if (expectedChildren.indexOf(actualChildValue) > -1) {
      console.log(
        `PASS: child ${actualChildValue} is ${indexOfActualChild} child in ${parent} children`
      );
    } else {
      console.log(
        `FAIL: child ${actualChildValue} should not in ${parent} children`
      );
    }
  });
});

let deletedKey = "b";
treeA.removeSubTree("b");

let deletedRoots = ["b", "d", "e", "f", "g"];

deletedRoots.forEach(root => {
  if (treeStructure.has(root)) {
    console.log(`FAIL: did not delete ${root} key`);
  } else {
    console.log(`PASS: deleted ${root} key`);
  }
});

let deletedRootParent = "a";
let parentsChildren = treeStructure.get(deletedRootParent).children;

if (parentsChildren.filter(({ value }) => value === deletedKey).length !== 0) {
  console.log(
    `FAIL: ${deletedKey} key is still in ${deletedRootParent} parent's children array`
  );
} else {
  console.log(
    `PASS: removed ${deletedKey} key from ${deletedRootParent} parent's children array`
  );
}
