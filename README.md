# ngram [![Build Status](https://travis-ci.org/madbence/node-ngram.svg)](https://travis-ci.org/madbence/node-ngram)

Create [ngram]() tokens from a string. ES6 generators are supported!

## Install

Clone the repo, until I upload it to [npm](http://npmjs.org)...

## Usage

```js
console.log(ngram('foo'));
// [ 'f', 'o', 'o', 'fo', 'oo'  ]

console.log(ngram('foobar', 2, 3));
// [ 'fo', 'oo', 'ob', 'ba', 'ar', 'foo', 'oob', 'oba', 'bar'  ]
```

## API

### ngram(string[, min, max])

Return ngrams with length between `min` and `max`.
`min` defaults to 1, `max` defaults to 2.

## ES6 API

### ngram(string[, min, max])

Yields ngrams with length between `min` and `max`.
`min` defaults to 1, `max` defaults to 2.

```js
for(let token of ngram('foo')) {
  console.log(token);
}
```

## License

MIT
