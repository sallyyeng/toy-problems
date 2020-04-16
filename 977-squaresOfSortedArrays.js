/**
 * @param {number[]} A
 * @return {number[]}
 */

const getPointers = arr => {
  // init to undefined
  let rightPointer;
  let leftPointer;

  let i = 0;
  // if there is a value <= 0, leftPointer will be defined
  while (arr[i] <= 0 && i < arr.length) {
    leftPointer = i;
    i++;
  }

  // if leftPointer isn't defined, that means all numbers are positive
  if (leftPointer === undefined) {
    rightPointer = 0;
    leftPointer = -1; // make leftPointer out of bounds
  } else {
    // otherwise, we have normal case and rightPointer will be left + 1
    rightPointer = leftPointer + 1;
  }

  return {
    rightPointer,
    leftPointer
  };
};

var sortedSquares = function(arr) {
  let { leftPointer, rightPointer } = getPointers(arr);
  let result = [];

  // while left or right pointer is within bounds
  while (leftPointer >= 0 || rightPointer < arr.length) {
    const leftVal = Math.abs(arr[leftPointer]);
    const leftIsValid = leftVal || leftVal === 0;
    const rightVal = Math.abs(arr[rightPointer]);
    const rightIsValid = rightVal || rightVal === 0;

    const pushRight = () => {
      result.push(Math.pow(rightVal, 2));
      rightPointer++;
    };

    const pushLeft = () => {
      result.push(Math.pow(leftVal, 2));
      leftPointer--;
    };

    // if both are within bounds
    if (leftIsValid && rightIsValid) {
      // compare values
      if (leftVal <= rightVal) {
        pushLeft();
      } else {
        pushRight();
      }
    } else if (leftIsValid) {
      // if only left, then only push left
      pushLeft();
    } else if (rightIsValid) {
      // if only right, then only push right
      pushRight();
    }
  }

  return result;
};

// const input = [-7, -3, 2, 3, 11];
// const input = [1, 2];
// const input = [-3, 0];
// const input = [-1];
console.log("result: ", sortedSquares(input));

// ******************************************************* //
// Previous Answer
// ******************************************************* //

// const findPosAndNegPointers = A => {
//   let startingPointer = 0;
//   let posPointer = startingPointer;
//   let negPointer = startingPointer;

//   while (startingPointer < A.length && A[startingPointer] < 0) {
//     negPointer = startingPointer;
//     posPointer = startingPointer + 1;
//     startingPointer++;
//   }

//   return [negPointer, posPointer];
// };

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// var sortedSquares = function(A) {
//   if (!A.length) return [];

//   let result = [];
//   let [negPointer, posPointer] = findPosAndNegPointers(A);

//   while (negPointer >= 0 || posPointer < A.length) {
//     let posPointerValue = Math.abs(A[posPointer]);
//     let negPointerValue = Math.abs(A[negPointer]);
//     let pushed;

//     if (posPointer === negPointer) {
//       pushed = posPointerValue;
//       result.push(Math.pow(pushed, 2));
//       posPointer++;
//       negPointer--;
//       continue;
//     }

//     if (posPointerValue < negPointerValue || isNaN(negPointerValue)) {
//       pushed = posPointerValue;
//       posPointer++;
//     } else {
//       pushed = negPointerValue;
//       negPointer--;
//     }

//     result.push(Math.pow(pushed, 2));
//   }

//   return result;
// };

// console.log("result: ", sortedSquares([-7, -3, 2, 3, 11]));
