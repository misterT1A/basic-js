const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {};

  domains.forEach((element) => {
    const elemArr = element.split(".").reverse();

    elemArr.forEach((elem, index) => {
      if (index === 0) {
        if (dns[`.${elem}`] != undefined) {
          dns[`.${elem}`] += 1;
        } else {
          dns[`.${elem}`] = 1;
        }
      } else {
        let string = "";

        for (let i = 0; i <= index; i++) {
          string += `.${elemArr[i]}`;
        }

        if (dns[string] != undefined) {
          dns[string] += 1;
        } else {
          dns[string] = 1;
        }
      }
    });
  });
  return dns;
}

module.exports = {
  getDNSStats,
};
