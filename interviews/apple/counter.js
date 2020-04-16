// implement counter without additional external state
const counter = () => {
  counter.count = counter.count ? (counter.count += 1) : 1;
  return counter.count;
};

console.log("result: ", counter());
console.log("result 1: ", counter());
console.log("result 2: ", counter());
