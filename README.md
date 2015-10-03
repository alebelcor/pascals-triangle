# pascal's triangle

> Get a triangular array of the binomial coefficients given a certain number of rows.

[![Build Status](https://travis-ci.org/alebelcor/pascals-triangle.svg)](https://travis-ci.org/alebelcor/pascals-triangle)

## Install

```bash
npm install --save pascals-triangle
```

## Usage

```js
var triangle = require('pascals-triangle');

triangle(0); // [ [ 1 ] ]
triangle(1); // [ [ 1 ], [ 1, 1 ] ]
triangle(2); // [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ] ]
```

## API

### triangle(rows)

Returns a matrix (`array` of `array`s) containing the rows in order from top to bottom.

#### rows

Type: `number`

The number of rows or iterations to produce. It's a zero-based index, so if you want the first level you'd pass in `0`.

## License

MIT © Alejandro Beltrán
