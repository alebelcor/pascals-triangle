'use strict';

import test from 'ava';
import triangle from './';

test('it should throw an error if the parameter is not a valid number', t => {
  t.throws(() => triangle(-1));
  t.throws(() => triangle('foo'));
  t.throws(() => triangle(true));
  t.throws(() => triangle([]));
  t.throws(() => triangle({}));
  t.throws(() => triangle(null));
  t.throws(() => triangle());
  t.notThrows(() => triangle(0));
  t.notThrows(() => triangle(1));
  t.notThrows(() => triangle(99));
});

test('it should return an array of arrays', t => {
  t.deepEqual(true, Array.isArray(triangle(1)));
  t.deepEqual(true, Array.isArray(triangle(1)[0]));
});

test('it should return the corresponding levels', t => {
  t.deepEqual(triangle(0), [[1]]);
  t.deepEqual(triangle(1), [[1], [1, 1]]);
  t.deepEqual(triangle(2), [[1], [1, 1], [1, 2, 1]]);
  t.deepEqual(triangle(3), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
  t.deepEqual(triangle(4), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  t.deepEqual(triangle(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]]);
  t.deepEqual(triangle(6), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1]]);
  t.deepEqual(triangle(7), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1]]);
  t.deepEqual(triangle(8), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1], [1, 8, 28, 56, 70, 56, 28, 8, 1]]);
  t.deepEqual(triangle(9), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1], [1, 8, 28, 56, 70, 56, 28, 8, 1], [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]]);
  t.deepEqual(triangle(10), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1], [1, 8, 28, 56, 70, 56, 28, 8, 1], [1, 9, 36, 84, 126, 126, 84, 36, 9, 1], [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]]);
});
