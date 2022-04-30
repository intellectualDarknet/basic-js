const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let str2 = ""
  let array = str.split("")
    let sum = 1
    for(let i = 0; i < array.length; i++) {
      console.log(i)
      if(array[i] == array[i + 1]) {
        sum++
      } else if(sum == 1){
        str2 += array[i]
        sum = 1
      }	else if (sum != 1){
        str2 += sum
        str2 += array[i]
        sum = 1
      }
  
      
    }
    return str2
  }
  
module.exports = {
  encodeLine
};
