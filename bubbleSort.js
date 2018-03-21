
const bubbleSort = function(arr) {
  let swap = true;

  for (let i = 0; i < arr.length && swap; i++) {
    swap = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
