/**
 * Initialize your data structure here.
 */
var Logger = function() {
  this._messageLog = new Map();
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  let isSeenMessage = this._messageLog.has(message);
  let latestMessageTS = this._messageLog.get(message);

  if (!isSeenMessage || timestamp - latestMessageTS >= 10) {
    this._messageLog.set(message, timestamp);
    return true;
  } else {
    return false;
  }
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

const obj = new Logger();

const events = [
  [1, "foo"],
  [2, "bar"],
  [3, "foo"],
  [8, "bar"],
  [10, "foo"],
  [11, "foo"]
];

events.forEach(([ts, mess]) => {
  let result = obj.shouldPrintMessage(ts, mess);
  console.log(`for time: ${ts} and message: ${mess} the result: ${result}`);
});
