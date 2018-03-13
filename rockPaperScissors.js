const rockPaperScissors = function (n) {
  const options = ['rock', 'paper', 'scissors'];
  const results = [];

  let recurse = (round = []) => {

    if (round.length >= n) {
      results.push(round);
      return;
    }

    for (let i = 0; i < options.length; i++) {
      recurse(round.concat(options[i]));
    }
  };
  recurse();
  return results;
};

