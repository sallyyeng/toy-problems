/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let i = null;
  let jewels = {};
  let counter = 0;

  for (i = 0; i < J.length; i++) {
    jewels[J[i]] = J[i];
  }

  for (i = 0; i < S.length; i++) {
    jewels[S[i]] ? counter ++ : null;
  }

  return counter;
};

let J = 'z';
let S = 'ZZ';

numJewelsInStones(J, S);
