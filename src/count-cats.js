const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(array) {	
   if (!array.length) return 0
	array1 = array[0]
	f = 0;
	for (let i = 1; i < array.length; i++) {
	array1 = [...array1,...array[i]]
		
	}
	console.log(array1)
	for(let z = 0; z < array1.length; z++) {

		if(array1[z] == '^^') {
			f++
		}

	}

console.log(f)
return f

}

module.exports = {
  countCats
};
