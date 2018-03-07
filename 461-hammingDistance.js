/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

const reverse = (str) => {
  let length = str.length;
  let times = Math.floor(str.length / 2);

  str = str.split('');
  for (let i = 0; i < times; i++) {
    [str[i], str[length - 1 - i]] = [str[length - 1 - i], str[i]];
  }
  return str.join('');
};

var hammingDistance = function(x, y) {
  let counter = 0;
  let bitX = reverse(x.toString(2));
  let bitY = reverse(y.toString(2));
  let test = x ^ y;

  let longerBit = bitX.length > bitY.length ? bitX : bitY;
  let shorterBit = longerBit === bitX ? bitY : bitX;

  for (let i = 0; i < longerBit.length; i++) {
    shorterBit[i] && shorterBit[i] !== longerBit[i] ? counter++ : null;
    !shorterBit[i] && longerBit[i] !== '0' ? counter++ : null;
  }
  return counter;
};
