const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(a) {



	for(let i = 0 ; i < a.length; i++) {
	s = 0
		if(a[i] == -1) continue
		
			for(let l = 0; l < a.length; l++) {
			
				if (a[l] == -1) continue
			
				if (a[i] < a[l]) {
				
					s = a[i]
					a[i] = a[l]
					a[l] = s 
				}
			
			}
	}
	return a

}

module.exports = {
  sortByHeight
};
