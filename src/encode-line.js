const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strArr = str.split("");

  let result = "";
  let count = 1;

  strArr.forEach((elem, index) => {
    if (elem === strArr[index + 1]) {
      count += 1;
    } else {
      if (count != 1) {
        result += `${count}${elem}`;
        count = 1;
      } else {
        result += elem;
      }
    }
  });

  return result;
}

module.exports = {
  encodeLine,
};
