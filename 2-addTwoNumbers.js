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

const addTwoNumbers = function(l1, l2) {

  let result = null;
  let resultTail = null;

  let l1Tail = l1;
  let l2Tail = l2;

  let remainderSwitch = false;

  while (l1Tail || l2Tail) {
    // console.log('=====BEGIN=====')
    // console.log('l1', JSON.stringify(l1Tail));
    // console.log('l2', JSON.stringify(l2Tail));
    l1Tail = l1Tail ? l1Tail : new ListNode(0);
    l2Tail = l2Tail ? l2Tail : new ListNode(0);
    let sum = 0;

    // if remainder exists, add 1 to sum
    sum = remainderSwitch ? l1Tail.val + l2Tail.val + 1 : l1Tail.val + l2Tail.val;

    // console.log(`remainder status: ${remainderSwitch} ${l1Tail.val} + ${l2Tail.val} = ${sum}`)
    // if sum > 10, set itself to num[1] and turn on remainder switch
    // else turn remainder switch off
    if (sum >= 10) {
      sum = parseInt(sum.toString().split('')[1]);
      remainderSwitch = true;
    } else {
      remainderSwitch = false;
    }

    if (!result) { // init node head
      result = new ListNode(sum);
      resultTail = result;
    } else { // all other cases
      resultTail.next = new ListNode(sum);
      resultTail = resultTail.next;
    }

    l1Tail = l1Tail.next;
    l2Tail = l2Tail.next;
    // console.log('=====END=====')
    // console.log('l1', JSON.stringify(l1Tail));
    // console.log('l2', JSON.stringify(l2Tail));
  }

  remainderSwitch ? resultTail.next = new ListNode(1) : null;

  console.log(JSON.stringify(result));
  return result;
};

const l1 = new ListNode(5);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
// l2.next = new ListNode();
// l2.next.next = new ListNode();

addTwoNumbers(l1, l2);
