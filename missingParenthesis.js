const Stack = function() {
  let storage = [];
  let length = 0;

  // add an item to the top of the stack
  this.push = function() {
    storage[length++] = arguments[0];
  };

  // remove an item from the top of the stack
  this.pop = function() {
    if (length) {
      let value = storage[--length];
      delete storage[length];
      return value;
    }
  };

  // return the number of items in the stack
  this.size = function() {
    return length;
  };
};

const isValidOperation = (str) => {
  const parenStack = new Stack();

  for (let letter of str) {
    // if starting with closed parenthesis, return false immediately
    if (parenStack.size() === 0 && letter === ')') { return false; }

    // otherwise, if open parenthesis, add to stack, else if close parenthesis, pop from stack
    letter === '(' ? parenStack.push(letter) :
      letter === ')' ? parenStack.pop() : null;
  }
  // if stack is empty, there are an equal number of open and closed parenthesis in valid orders so return true
  // otherwise, there are more open parenthesis than closed so return false
  return parenStack.size() === 0 ? true : false;
};
