/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head) return;

  let hare = head;
  let turtle = head;

  // identify middle point of the list
  while (hare && hare.next) {
    turtle = turtle.next;
    hare = hare.next.next;
  }

  // reverse at midpoint
  let prev = null;
  let current = turtle;

  while (current) {
    let future = current.next;

    current.next = prev;

    prev = current;
    current = future;
  }

  let leftHead = head; // unreversed linked list
  let rightHead = prev; // reversed linked list

  // merge the two lists
  // until reversed linked list is traversed through
  // i.e until reversed linked list has no next value
  while (rightHead.next) {
    let nextLeftHead = leftHead.next;
    let nextRightHead = rightHead.next;

    leftHead.next = rightHead;
    rightHead.next = nextLeftHead;

    leftHead = nextLeftHead;
    rightHead = nextRightHead;
  }

  return head;
};

// let linkedList = {
//   val: "A",
//   next: {
//     val: "B",
//     next: {
//       val: "C",
//       next: {
//         val: "D",
//         next: {
//           val: "E",
//           next: null
//         }
//       }
//     }
//   }
// };

let linkedList = {
  val: "A",
  next: {
    val: "B",
    next: {
      val: "C",
      next: {
        val: "D",
        next: {
          val: "E",
          next: {
            val: "F",
            next: null
          }
        }
      }
    }
  }
};

console.log("result: ", reorderList(linkedList));
