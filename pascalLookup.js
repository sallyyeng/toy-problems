const pascalLookup = function(x, y) {
  if (x === 1 && y === 0 || x >= y + 2) {
    return undefined;
  }
  if (x === 0 || y === x - 1) {
    return 1;
  }
  if (x === y) {
    return x + 1;
  }
  if (x === 1) {
    return y + 1;
  }
  if (x >= 2) {
    return pascalLookup(x, y - 1) + pascalLookup(x - 1, y - 1);
  }
};
