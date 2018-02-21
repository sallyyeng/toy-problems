const mixEvents = (obj) => {
  let events = {};

  obj.trigger = event => {
    // loop through the event's callback array and invoke/apply arguments
    let args = Array.prototype.slice.call(arguments, 1);
    events[event].forEach(callback => {
      callback.apply(obj, args);
    });
  };

  obj.on = (event, callback) => {
    events[event] = events[event] || [];
    events[event] = events[event].push(callback);
  };

  return obj;
};
