const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(str) {

	z = str.lastIndexOf('@')
	str = str.slice(str.lastIndexOf('@') + 1)
	console.log(str)
	return str
  
  }
module.exports = {
  getEmailDomain
};
