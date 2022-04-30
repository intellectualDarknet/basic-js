const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(array) {
  console.log(array)
	sum = 0;

	console.log('w',array[0].length);
	console.log('h',array.length);

	for (w = 0; w < array[0].length; w++) {

		for (h = 0; h < array.length; h++) {
			console.log('w',w,' ',h);
			if(array[h][w] == 0) break;
			sum += array[h][w];

		}

	}
	console.log(sum)
	return sum
}

module.exports = {
  getMatrixElementsSum
};
