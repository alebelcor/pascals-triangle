'use strict';

var test = require('ava');
var triangle = require('./');

test('it should throw an error if the parameter is not a valid number', function (t) {
  t.throws(function () { return triangle(-1); });
  t.throws(function () { return triangle('foo'); });
  t.throws(function () { return triangle(true); });
  t.throws(function () { return triangle([]); });
  t.throws(function () { return triangle({}); });
  t.throws(function () { return triangle(null); });
  t.throws(function () { return triangle(); });
  t.doesNotThrow(function () { return triangle(0); });
  t.doesNotThrow(function () { return triangle(1); });
  t.doesNotThrow(function () { return triangle(99); });
  t.end();
});

test('it should return an array of arrays', function (t) {
  t.same(true, Array.isArray(triangle(1)));
  t.same(true, Array.isArray(triangle(1)[0]));
  t.end();
});

test('it should return the corresponding levels', function (t) {
  t.same(triangle(0), [[1]]);
  t.same(triangle(1), [[1], [1, 1]]);
  t.same(triangle(2), [[1], [1, 1], [1, 2, 1]]);
  t.same(triangle(3), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
  t.same(triangle(4), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  t.same(triangle(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]]);
  t.same(triangle(6), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1]]);
  t.same(triangle(7), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1]]);
  t.same(triangle(8), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1], [1, 8, 28, 56, 70, 56, 28, 8, 1]]);
  t.same(triangle(9), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1], [1, 8, 28, 56, 70, 56, 28, 8, 1], [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]]);
  t.same(triangle(10), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1], [1, 8, 28, 56, 70, 56, 28, 8, 1], [1, 9, 36, 84, 126, 126, 84, 36, 9, 1], [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]]);
  t.end();
});
