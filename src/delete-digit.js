const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(str) {
  str = `${str}`
	max = +str.substring(1)
	for (let i = 0; i < str.length ; i++) {

		z = (str.substring(0,i) + str.substring(i +1))

		if (max < +z) {
			max = +z
		}

	}
	console.log(max)
	return max
}

module.exports = {
  deleteDigit
};
