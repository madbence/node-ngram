'use strict';

module.exports = function ngram(string, min, max, side) {
  min = min || 1;
  max = max || 2;
  if(max < min) {
    throw new Error('max should be >= than min');
  }
  var result = [];
  for(var i = min; i <= max; i++) {
    for(var j = 0; j < string.length-i+1; j++) {
      result.push(string.substr(j, i));
    }
  }
  return result;
};
