/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

//******** Solution using binaries ********//

const evenOccurrence = (arr) => {
  let counterObj = {};

  // iterate through array and switch each occurrence of a value between true and false
  arr.forEach(value => {
    counterObj[value] = !counterObj[value];
  });
  // return the first false occurrence
  for (let i = 0; i < arr.length; i++) {
    if (!counterObj[arr[i]]) {
      console.log(arr[i]);
      return arr[i];
    }
  }
  return null;
};

//******** Solution not using binaries ********//

// const evenOccurrence = (arr) => {
//   // initialize counter object
//   let counterObj = {};

//   // iterate through array
//   arr.forEach(value => {
//     // if key of value exists, incremement, else initialize to one
//     counterObj[value] = counterObj[value] ? counterObj[value] += 1 : 1;
//   });

//   // iterate through array
//   for (let i = 0; i < arr.length; i++) {
//     // if key's value is even in counter
//     if (counterObj[arr[i]] % 2 === 0) {
//       return arr[i];
//     }
//   }
//   return null;
// };
