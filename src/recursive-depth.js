const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array,count = 1) {
    let z = 0;
    for (let i = 0;i < array.length; i++) {
      if(Array.isArray(array[i])) {
        z = 1;	 
      }
    }
    if (z == 0) {
      return count;
    }
    array = array.flat()
    count++;
    return this.calculateDepth(array,count)
  }
}





module.exports = {
  DepthCalculator
};
