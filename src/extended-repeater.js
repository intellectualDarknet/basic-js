const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, obj) {

	
	let {repeatTimes,separator,addition,additionRepeatTimes,additionSeparator} = obj
	let string1;
	let string2;
  if (typeof(addition) == "boolean" || typeof(addition) == "object") addition = `${addition}`
	if(addition) {
		string1 = new Array(additionRepeatTimes || 1).fill(addition ?? '').join(additionSeparator || '|');

	}
	string2 = string1 ? str + string1 : str;
	string2 = new Array(repeatTimes || 1).fill(string2).join(separator || "+")
	return string2
}

module.exports = {
  repeater
};
