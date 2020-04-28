const arrayOfArrays = inputArr => {
  result = [];

  const recurse = (currResult, index) => {
    if (currResult.length === inputArr.length) {
      result.push([...currResult]);
      return;
    }

    let currArray = inputArr[index];

    // sometimes you return without hitting the base case
    // and so everything that happens after the return
    // needs to handle both base case + others
    // i.e. only act in base case if you need to
    // everything after return will be .pop or -=1
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
