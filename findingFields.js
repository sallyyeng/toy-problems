/*** countFields will return the number of continuously marked squares in a given grid ***/
// Input:
// let sampleGrid = ['NNNNY', 'NYNNY', 'YYYNN', 'NYNNY', 'NNNYY'];
// sampleGrid = sampleGrid.map(s => s.split(''));
// Output: 3

const countFields = (grid) => {
  // initialize fieldCounter
  let fieldCounter = 0;

  // initialize outOfBounds helper
  const isOutOfBounds = (r, c) => {
    let gridSize = grid.length - 1;

    // if row or column < 0 or > grid.length - 1 return true else false
    if (r < 0 || c < 0 || r > gridSize || c > gridSize) {
      return true;
    }
    return false;
  };

  // initialize DFS recursive helper to mark all attached field squares as identified
  const markAttachedFields = (r, c) => {
    // if square is out of bounds or already marked, return
    if (isOutOfBounds(r, c) || grid[r][c] === 'N') {
      return;
    }

    // toggle square to mark as identified
    grid[r][c] = 'N';

    // check all other squares attached to this square and mark as visited if necessary
    markAttachedFields(r - 1, c);
    markAttachedFields(r + 1, c);
    markAttachedFields(r, c + 1);
    markAttachedFields(r, c - 1);
  };

  // iterate through grid
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      // if you identify a field
      if (grid[r][c] === 'Y') {
        // increment field counter
        fieldCounter ++;

        // identify all other attached field squares and mark as identified
        markAttachedFields(r, c);
      }

    }
  }

  grid.forEach(array => {
    console.log(JSON.stringify(array));
  });

  console.log(fieldCounter);
  return fieldCounter;
};

