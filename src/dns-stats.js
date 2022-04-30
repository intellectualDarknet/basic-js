const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(a) {
	console.log(a)
	let array = []
	let array2 = []
	let obj = {}

	array = reverse(a);

	for(let z = 0; z < array.length; z++) {

		let str3 = '';

		for(let q = 0 ; q < array[z].length; q++) {

			str3 += array[z][q]
			let sum = 0;
			
			if(array[z][q+1] == '.' || q + 1 == array[z].length) {

				if(array2.includes(str3)) {
          continue;
        } else {
					array2.push(str3)

					for(let k = 0; k < array.length; k++) {

						if(array[k].includes(str3.slice(1))) {
							sum++;
						}	
		
					}

					obj[`.${str3}`] = sum
				}
			}
		}
	}
	return obj;
}

function reverse(a) {
	let array1 = []
	let array3 = []
		for (let i = 0; i < a.length; i++) {
			let array2 = a[i].split('.')
			let str2 = array2.reverse().join('.') 
			array3.push(str2)
		}
	return array3
}

module.exports = {
  getDNSStats
};
