const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(a,b) {
  const aSymbolsCount = getSymbolsCount(a);
  const bSymbolsCount = getSymbolsCount(b);
  return Array.from(aSymbolsCount.keys()).reduce((acc, symbol) => {
    if (bSymbolsCount.has(symbol)) {
      return acc + Math.min(aSymbolsCount.get(symbol), bSymbolsCount.get(symbol));
    } else {
      return acc;
    }
  }, 0);
}

function getSymbolsCount(str) {
  const map = new Map();
  str.split('').forEach((symbol) => {
    if (map.has(symbol)) {
      map.set(symbol, map.get(symbol) + 1);
    } else {
      map.set(symbol, 1);
    }
  });
  return map;
}

module.exports = {
  getCommonCharacterCount
};
