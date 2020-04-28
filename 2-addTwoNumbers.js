/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const ListNode = function(val) {
  this.val = val;
  this.next = null;
};

var addTwoNumbers = function(l1, l2) {
  let result;
  let pointer;
  let remainder = 0;
  let currSum;

  // while either remainder OR l1 or l2 NODE exists...
  while (l1 || l2 || remainder) {
    // fill in any null node values with 0
    l1 = l1 || new ListNode(0);
    l2 = l2 || new ListNode(0);

    currSum = l1.val + l2.val + remainder;

    // calculate remainder
    if (currSum >= 10) {
      currSum = currSum % 10;
      remainder = 1;
    } else {
      remainder = 0;
    }

    let sumAsListNode = new ListNode(currSum);

    if (!result) {
      result = sumAsListNode;
      pointer = result;
    } else {
      pointer.next = sumAsListNode;
      pointer = pointer.next;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  return result;
};

// // [5,0,1,1]

// let linkedListOne = {
//   val: 2,
//   next: {
//     val: 4,
//     next: {
//       val: 5,
//       next: null
//     }
//   }
// };

// let linkedListTwo = {
//   val: 3,
//   next: {
//     val: 6,
//     next: {
//       val: 5,
//       next: null
//     }
//   }
// };

// // [0,1]

// let linkedListOne = {
//   val: 5,
//   next: null
// };

// let linkedListTwo = {
//   val: 5,
//   next: null
// };

// [0,3];

let linkedListOne = {
  val: 4,
  next: {
    val: 2,
    next: null
  }
};

let linkedListTwo = {
  val: 6,
  next: null
};

console.log("result: ", addTwoNumbers(linkedListOne, linkedListTwo));

// **************************************************** //
// Previous Solution
// **************************************************** //

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

// const ListNode = function(val) {
//   this.val = val;
//   this.next = null;
// };

// const addTwoNumbers = function(l1, l2) {

//   let result = null;
//   let resultTail = null;

//   let l1Tail = l1;
//   let l2Tail = l2;

//   let remainderSwitch = false;

//   while (l1Tail || l2Tail) {
//     l1Tail = l1Tail ? l1Tail : new ListNode(0);
//     l2Tail = l2Tail ? l2Tail : new ListNode(0);
//     let sum = 0;

//     // if remainder exists, add 1 to sum
//     sum = remainderSwitch ? l1Tail.val + l2Tail.val + 1 : l1Tail.val + l2Tail.val;

//     // if sum > 10, set itself to num[1] and turn on remainder switch
//     // else turn remainder switch off
//     if (sum >= 10) {
//       sum = sum % 10;
//       remainderSwitch = true;
//     } else {
//       remainderSwitch = false;
//     }

//     if (!result) { // init node head
//       result = new ListNode(sum);
//       resultTail = result;
//     } else { // all other cases
//       resultTail.next = new ListNode(sum);
//       resultTail = resultTail.next;
//     }

//     l1Tail = l1Tail.next;
//     l2Tail = l2Tail.next;
//   }
//   remainderSwitch ? resultTail.next = new ListNode(1) : null;
//   return result;
// };
