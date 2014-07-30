'use strict';

var ngram = require('../generator');

describe('ngram/generator', function() {
  it('should yield ngram of the correct length', function() {
    var result = [];
    for(let token of ngram('foo')) {
      result.push(token);
    }
    result.should.eql([
      'f', 'o', 'o',
      'fo', 'oo'
    ]);
  });
});
