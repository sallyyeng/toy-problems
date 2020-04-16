/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const travelMap = new Map();

  tickets.forEach(([from, to]) => {
    if (travelMap.has(from)) {
      travelMap.set(from, [...travelMap.get(from), to]);
    } else {
      travelMap.set(from, [to]);
    }
  });

  travelMap.forEach((arrivals, destination) =>
    travelMap.set(destination, arrivals.sort())
  );

  let intinerary = ["JFK"];

  const recurse = outer => {
    let destinations = travelMap.get(outer);

    if (!destinations || destinations.length === 0) return;

    destinations.forEach((dest, i) => {
      intinerary.push(dest);
      destinations.splice(i, 1);

      recurse(dest);

      if (intinerary.length === tickets.length + 1) return;

      destinations.splice(i, 0, dest);
      intinerary.pop();
    });
  };

  recurse("JFK");

  return intinerary;
};

const ticketsA = [
  ["JFK", "S"],
  ["JFK", "A"],
  ["S", "A"],
  ["A", "JFK"],
  ["A", "S"]
]; // ["JFK","ATL","JFK","SFO","ATL","SFO"]
const ticketsB = [
  ["MUC", "LHR"],
  ["JFK", "MUC"],
  ["SFO", "SJC"],
  ["LHR", "SFO"]
]; // ["JFK", "MUC", "LHR", "SFO", "SJC"]
const ticketsC = [
  ["JFK", "KUL"],
  ["JFK", "NRT"],
  ["NRT", "JFK"]
]; // ["JFK","NRT","JFK","KUL"]

console.log("ANSWERRRR: ", findItinerary(ticketsC));
