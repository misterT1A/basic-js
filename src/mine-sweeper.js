const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newArr = matrix.map((row, indexRow) => {
    return row.map((elem, index) => {
      let count = 0;

      if (matrix[indexRow - 1] && matrix[indexRow - 1][index] === true) {
        count += 1;
      }

      if (matrix[indexRow - 1] && matrix[indexRow - 1][index + 1] === true) {
        count += 1;
      }

      if (matrix[indexRow - 1] && matrix[indexRow - 1][index - 1] === true) {
        count += 1;
      }

      if (matrix[indexRow + 1] && matrix[indexRow + 1][index] === true) {
        count += 1;
      }

      if (matrix[indexRow + 1] && matrix[indexRow + 1][index + 1] === true) {
        count += 1;
      }

      if (matrix[indexRow + 1] && matrix[indexRow + 1][index - 1] === true) {
        count += 1;
      }

      if (matrix[indexRow][index + 1] && matrix[indexRow][index + 1] === true) {
        count += 1;
      }

      if (matrix[indexRow][index - 1] && matrix[indexRow][index - 1] === true) {
        count += 1;
      }

      return count;
    }, 0);
  });

  return newArr;
}

module.exports = {
  minesweeper,
};
