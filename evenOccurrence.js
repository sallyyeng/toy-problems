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
