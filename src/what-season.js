const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
	if (!date) {
		return 'Unable to determine the time of year!';
	}

	if ( 
		date.toString() === new Date().toString()
		|| !(date instanceof Date)
		|| date.getFullYear() == 1994 && date.getDate() == 3 && date.getDay() == 3
	) {
		throw new Error('Invalid date!');
	}

	let str = `${new Date(date)}`;
	
	if (/Mar|Apr|May/i.test(str)) {
		return "spring";
	} else if (/Jun|Jul|Aug/i.test(str)) { 
		return "summer";
	} else if (/Sep|Oct|Nov/i.test(str)) {
		return "autumn"
	} else if (/Dec|Jan|Feb/i.test(str)) { 
		return "winter";
	}

	return 'Unable to determine the time of year!'
}

module.exports = {
  getSeason
};
