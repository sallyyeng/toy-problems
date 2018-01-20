const BinaryHeap = () => {
  this._heap = [];
  this._compare = function (i, j) { return i < j }; // if left < right return true
};

// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
};

BinaryHeap.prototype.insert = function (value) {
  // add node to end of heap
  this._heap.push(value);
  let currIndex = this._heap.length - 1;

  // create inner recursive helper
  const resortHeap = (currIndex) => {
    // base case: if index is < 0 return
    if (currIndex === 0) {
      return;
    }

    currNodeVal = this._heap[currIndex];
    parentNodeIndex = getParentIndex(currIndex);
    parentNodeVal = this._heap[parentNodeIndex];

    // if node is less than parent
    if (this._compare(currNodeVal, parentNodeVal)) {
      // swap
      [this._heap[parentNodeIndex], this._heap[currIndex]] = [this._heap[currIndex], this._heap[parentNodeIndex]];
      resortHeap(parentNodeIndex);
    }
  };

  resortHeap(currIndex);
};

BinaryHeap.prototype.removeRoot = function () {
  let lastIndex = this._heap.length - 1;

  // swap root with last value
  [this._heap[0], this._heap[lastIndex]] = [this._heap[lastIndex], this._heap[0]];

  let removedRoot = this._heap.pop();

  // create inner recursive helper
  const resortHeapInverse = (currIndex) => {
    let currVal = this._heap[currIndex];
    let leftChildIndex = getLeftChild(currIndex);
    let leftChildVal = this._heap[leftChildIndex];
    let rightChildIndex = getRightChild(currIndex);
    let rightChildVal = this._heap[rightChildIndex];

    // base case: return when at last value
    if (!leftChildVal && !rightChildVal) {
      return removedRoot;
    }

    // if only one child, compare and swap
    if (leftChildVal && !rightChildVal) {
      if (this._compare(leftChildVal, currVal)) {
        // swap if leftchild is lesser
        [this._heap[currIndex], this._heap[leftChildIndex]] = [this._heap[leftChildIndex], this._heap[currIndex]];
      }
      return removedRoot;
    } else if (!leftChildVal && rightChildVal) {
      if (this._compare(rightChildIndex, currVal)) {
        // swap if leftchild is lesser
        [this._heap[currIndex], this._heap[rightChildIndex]] = [this._heap[rightChildIndex], this._heap[currIndex]];
      }
      return removedRoot;
    }

    // if 2 children, compare children, then compare lesser child, then swap if necessary
    if (this._compare(leftChildVal, rightChildVal)) {
      // if left child is lesser, compare currentVal to left child value
      if (this._compare(leftChildVal, currVal)) {
        // swap if leftchild is lesser
        [this._heap[currIndex], this._heap[leftChildIndex]] = [this._heap[leftChildIndex], this._heap[currIndex]];
      }
      currIndex = leftChildIndex;
    } else {
      // if right child is lesser, compare currentVal to right child value
      if (this._compare(rightChildVal, currVal)) {
        // swap if leftchild is lesser
        [this._heap[currIndex], this._heap[rightChildIndex]] = [this._heap[rightChildIndex], this._heap[currIndex]];
      }
      currIndex = rightChildIndex;
    }

    resortHeapInverse(currIndex);
  };

  resortHeapInverse(0);
};

getParentIndex = (index) => {
  return Math.floor((index - 1) / 2);
};

getLeftChild = (index) => {
  return index * 2 + 1;
};

getRightChild = (index) => {
  return index * 2 + 2;
};
