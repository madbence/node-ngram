'use strict';

var ngram = require('../');

describe('ngram', function() {
  it('should default to min = 1, max = 2', function() {
    ngram('foo').should.eql(['f', 'o', 'o', 'fo', 'oo']);
  });
  it('should throw when max < min', function() {
    (function() {
      ngram('foo', 2, 1);
    }).should.throw();
  });
  it('should return ngrams of the correct length', function() {
    ngram('foobar', 1, 3).should.eql([
      'f', 'o', 'o', 'b', 'a', 'r',
      'fo', 'oo', 'ob', 'ba', 'ar',
      'foo', 'oob', 'oba', 'bar'
    ]);
    ngram('foobar', 2, 4).should.eql([
      'fo', 'oo', 'ob', 'ba', 'ar',
      'foo', 'oob', 'oba', 'bar',
      'foob', 'ooba', 'obar'
    ]);
  });
});
