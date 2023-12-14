const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrN = n.toString().split("");

  let result = 0;

  arrN.forEach((element, index) => {
    let newArr = Array.from(arrN);
    newArr.splice(index, 1);

    const newElem = Number(newArr.join(""));
    if (newElem > result) {
      result = newElem;
    }
  });

  return result;
}

module.exports = {
  deleteDigit,
};
