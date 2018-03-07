
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, value) {
    let hash = getIndexBelowMaxForKey(key, storageLimit);

    if (!storage[hash]) { storage[hash] = []; } // if bucket doesn't exist, create a new array
    let bucket = storage[hash];

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  };

  result.retrieve = function(key) {
    let hash = getIndexBelowMaxForKey(key, storageLimit);

    let bucket = storage[hash];
    if (!bucket) { return; } // if bucket doesn't exist, return

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) { return tuple[1]; }
    }

    return undefined; // if cannot find value, return undefined
  };

  result.remove = function(key) {
    let hash = getIndexBelowMaxForKey(key, storageLimit);

    let bucket = storage[hash];
    if (!bucket) { return undefined; } // if bucket doesn't exist, return undefined

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) { bucket.splice(i, 1); }
      return;
    }
  };

  return result;
};

