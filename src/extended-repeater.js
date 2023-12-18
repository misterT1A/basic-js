const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    separator = "+",
    repeatTimes = 1,
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  const addStr = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    addStr.push(String(addition));
  }

  const resultStr = [];
  for (let i = 0; i < repeatTimes; i++) {
    resultStr.push(String(str) + addStr.join(additionSeparator));
  }

  return resultStr.join(separator);
}

module.exports = {
  repeater,
};
