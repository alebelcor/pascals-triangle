'use strict';

module.exports = function (numberOfRows) {
  var matrix;

  if (typeof numberOfRows !== 'number' || numberOfRows < 0) {
    throw new Error('Number of rows must be a valid number');
  }

  matrix = [[1]];

  if (numberOfRows === 0) {
    return matrix;
  }

  for (var i = 1; i <= numberOfRows; i += 1) {
    matrix[i] = [];

    for (var j = 0; j <= matrix[i - 1].length; j += 1) {
      if (j === 0 || j === matrix[i - 1].length) {
        matrix[i][j] = 1;
      } else {
        matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
      }
    }
  }

  return matrix;
};
