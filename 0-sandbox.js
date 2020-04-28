const arrayOfArrays = inputArr => {
  let results = [];

  const recurse = (i, currResult) => {
    if (i === inputArr.length) {
      results.push([...currResult]);
      return;
    }

    for (let element of inputArr[i]) {
      currResult.push(element);
      recurse(i + 1, currResult);

      currResult.pop();
    }
  };

  recurse(0, []);

  return results;
};

// console.log('=============== RESULT ==============')
// const input = [[1,2], [3], [4,5]];
// console.log(arrayOfArrays(input));
