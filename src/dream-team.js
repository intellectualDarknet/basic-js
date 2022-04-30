const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(teamArray) {
  if (!Array.isArray(teamArray)) return false;
  let string = '';

	for(let a = 0; a < teamArray.length; a++) {
		if(typeof(teamArray[a]) != "string" ) continue;
    teamArray[a] = teamArray[a].replace(/[^a-zа-яё]/gi, '');
    if(teamArray[a].length == 0) continue;
		string += teamArray[a][0].toUpperCase();

	}
  l = string.split("").sort().join("");
  if(l.length == 0) return false;
  return l;
}

module.exports = {
  createDreamTeam
};
