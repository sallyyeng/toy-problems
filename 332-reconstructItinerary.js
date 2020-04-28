const findItinerary = tickets => {
  // init vars
  let itinerary = ["JFK"];
  let connectionMap = new Map();

  // create map of departing to arrival airports
  tickets.forEach(([from, to]) => {
    if (connectionMap.has(from)) {
      connectionMap.get(from).push(to);
    } else {
      connectionMap.set(from, [to]);
    }
  });

  // sort each arrival array in map (smallest lexical takes precedence)
  connectionMap.forEach((arrivals, destination) =>
    connectionMap.set(destination, arrivals.sort())
  );

  // create your recursive function
  // if connecting airport doesn't exist, return;
  // for each destination
  // add destination to results
  // remove destination from being visited again
  // recurse until we have enough tickets
  // if we don't, then reverse these steps
  // and continue onto next letter (and path)
  const buildItinerary = conn => {
    let destinations = connectionMap.get(conn);
    if (!destinations) return;

    destinations.forEach((dest, i) => {
      itinerary.push(dest);
      destinations.splice(i, 1);

      buildItinerary(dest);

      // NOTICE: the return comes AFTER the recursive call because
      // once you find a valid itinerary (which is when the code below would return),
      // it jumps you back up to the line where the recursive call was made (buildItinerary(dest)
      // and you want to exit the recursive loop immediately!!
      // OTHERWISE, it'll run the splicing/popping code below
      if (itinerary.length - 1 === tickets.length) return;

      // VERY rarely will you find code after a recursive call
      // i think this allows you to reverse any moves you made when going down the "wrong path"
      destinations.splice(i, 0, dest);
      itinerary.pop();
    });
  };

  // call recursion with first argument
  buildItinerary("JFK");

  // return result
  return itinerary;
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
const ticketsC = [["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]; // ["JFK","NRT","JFK","KUL"]

console.log("ANSWERRRR: ", findItinerary(ticketsC));
