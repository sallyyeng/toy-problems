// using es6 class

class LRUCache {
  constructor(capacity) {
    this._cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    return this._cache.get(key) || -1;
  }

  put(key, value) {}
}

// using es6 class and JS Map class
