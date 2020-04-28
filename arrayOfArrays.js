const arrayOfArrays = inputArr => {
  result = [];

  const recurse = (currResult, index) => {
    if (currResult.length === inputArr.length) {
      result.push([...currResult]);
      return;
    }

    let currArray = inputArr[index];

    currArray.forEach(el => {
      currResult.push(el);
      index += 1;

      recurse(currResult, index);

      currResult.pop();
      index -= 1;
    });
  };

  recurse([], 0);

  return result;
};

console.log("=============== RESULT ==============");

const input = [[1, 2], [3], [4, 5]];
console.log("result: ", ...arrayOfArrays(input));
