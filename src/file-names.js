const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(a) {
	console.log(a)
let f = ''
let z = ''
	for(let i = 0 ; i < a.length - 1; i++) {
		console.log(a)

		for (let q = i + 1; q < a.length ; q++ ) {

			if(a[i] == a[q]) {

				f = a[q].replace(/[a-zа-яё]/gi, '');
				if(f.length == 0)  {
					a[q] = a[q] + `(1)`
					i = 0
					continue
				}
				switch(f.replace(/[0-9]/g, '').length) {
					case 4:
					 z =f.replace(/[^0-9]/gi, '')
					a[q] = a[q].replace(/[^a-zа-яё\s]/gi, '') + `(`+ (+z.slice(z.length / 2) +1 )  + `)`	
					break;

					case 2:
					f = f.replace(/[^0-9]/g, '');
					a[q] += `(` + `${f}` + `)` 
					break;
	
	
					default: break;
				}
				  
			}
		}


	}
return a 
}

module.exports = {
  renameFiles
};
