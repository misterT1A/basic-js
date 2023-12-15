const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  if (Object.getOwnPropertyNames(date).length !== 0) {
    throw new Error("Invalid date!");
  }

  let mounth = date.getMonth();

  if ((mounth >= 0 && mounth <= 1) || mounth === 11) {
    return "winter";
  }

  if (mounth >= 2 && mounth <= 4) {
    return "spring";
  }

  if (mounth >= 5 && mounth <= 7) {
    return "summer";
  }

  if (mounth >= 8 && mounth <= 10) {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
