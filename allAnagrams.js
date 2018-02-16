var allAnagrams = function(string) {
  var storage = {};

  var recurse = function(accStr, remainingStr) {

    if (remainingStr.length === 0) { storage[accStr] = 1; }

    for (var i = 0; i < remainingStr.length; i++) {
      var nxtAccumStr = accStr.concat(remainingStr[i]);
      var nxtRemainingStr = remainingStr.slice(0, i) + remainingStr.slice(i + 1);
      recurse(nxtAccumStr, nxtRemainingStr);
    }

  };
  recurse('', string);
  return Object.keys(storage);
};
