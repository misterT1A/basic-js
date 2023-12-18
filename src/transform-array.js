const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let newArr = [...arr];

  const commands = {
    "--discard-prev": (arr, ind) => {
      return arr[ind - 1] && arr[ind - 1] !== "undefined"
        ? arr.splice(ind - 1, 2, "undefined", "undefined")
        : arr.splice(ind, 1, "undefined");
    },
    "--discard-next": (arr, ind) => {
      return arr[ind + 1] && arr[ind - 1] !== "undefined"
        ? arr.splice(ind, 2, "undefined", "undefined")
        : arr.splice(ind, 1, "undefined");
    },
    "--double-prev": (arr, ind) => {
      return arr[ind - 1] && arr[ind - 1] !== "undefined"
        ? (arr[ind] = arr[ind - 1])
        : arr.splice(ind, 1, "undefined");
    },
    "--double-next": (arr, ind) => {
      return arr[ind + 1] && arr[ind - 1] !== "undefined"
        ? (arr[ind] = arr[ind + 1])
        : arr.splice(ind, 1, "undefined");
    },
  };

  newArr.forEach((elem, index) => {
    if (commands[elem]) {
      commands[elem](newArr, index);
    }
  });

  return newArr.filter((elem) => elem !== "undefined");
}

module.exports = {
  transform,
};
