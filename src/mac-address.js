const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(str) {
	let array = []
	str = str.replace(/[a-z]/, '').replace(/[G-Z]/, '');
	if (str.length != 17) return false
	console.log(17)
	if (str.replace(/-/g, '').length != 12) return false
	console.log(12)
	array = str.split('-')
	console.log(array)
	console.log(str)

	for (let i =  0; i < array.length; i++) {
		if (array[i].length != 2) return false
	}
	console.log(true)
	return true
}
module.exports = {
  isMAC48Address
};
