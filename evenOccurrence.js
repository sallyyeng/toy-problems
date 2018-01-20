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

// const evenOccurrence = (arr) => {
//   // initialize counter object
//   let counterObj = {};

//   // iterate through array
//   arr.forEach(value => {
//     if (counterObj[value]) {
//       // if key of value exists, incremement
//       counterObj[value]++;
//     } else {
//       // else initialize to one
//       counterObj[value] = 1;
//     }
//   });

//   // iterate through array
//   for (let i = 0; i < arr.length; i++) {
//     // if key's value is even in counter
//     if (counterObj[arr[i]] % 2 === 0) {
//       console.log(arr[i]);
//       return arr[i];
//     }
//   }
//   return null;
// };

//******** Solution using binaries instead ********//

// const evenOccurrence = (arr) => {
//   // initialize counter object
//   let counterObj = {};

//   // iterate through array
//   arr.forEach(value => {
//     if (counterObj[value]) {
//       // if key of value exists, incremement
//       counterObj[value] = false;
//     } else {
//       // else initialize to one
//       counterObj[value] = !counterObj[value];
//     }
//   });

//   // iterate through array
//   for (let i = 0; i < arr.length; i++) {
//     // if key's value is even in counter
//     if (counterObj[arr[i]] % 2 === 0) {
//       console.log(arr[i]);
//       return arr[i];
//     }
//   }
//   return null;
// };

