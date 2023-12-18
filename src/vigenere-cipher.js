const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.notReverseCrypt = reverse;
    this.words = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }

    const keyArr = key.split("");
    const keyWords = [];

    let keyCount = 0;

    str.split("").forEach((elem, index) => {
      if (elem !== " ") {
        if (keyCount <= keyArr.length - 1) {
          keyWords.push(keyArr[keyCount]);
          keyCount += 1;
        } else {
          keyCount = 0;
          keyWords.push(keyArr[keyCount]);
          keyCount = 1;
        }
      } else {
        keyWords.push(" ");
      }
    });

    let result = [];
    let countWordIndex = this.words.length;

    str.split("").forEach((elem, index) => {
      if (elem.match(/[a-zA-Z]/)) {
        const elemIndex = this.words.indexOf(elem.toLowerCase());
        const keyElemeIndex = this.words.indexOf(keyWords[index].toLowerCase());

        if (elemIndex + keyElemeIndex < countWordIndex) {
          result.push(this.words[elemIndex + keyElemeIndex].toUpperCase());
        } else {
          result.push(
            this.words[elemIndex + keyElemeIndex - countWordIndex].toUpperCase()
          );
        }
      } else {
        result.push(elem);
      }
    });

    return this.notReverseCrypt ? result.join("") : result.reverse().join("");
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }

    const keyArr = key.split("");
    const keyWords = [];

    let keyCount = 0;

    str.split("").forEach((elem, index) => {
      if (elem !== " ") {
        if (keyCount <= keyArr.length - 1) {
          keyWords.push(keyArr[keyCount]);
          keyCount += 1;
        } else {
          keyCount = 0;
          keyWords.push(keyArr[keyCount]);
          keyCount = 1;
        }
      } else {
        keyWords.push(" ");
      }
    });

    let result = [];
    let countWordIndex = this.words.length;

    str.split("").forEach((elem, index) => {
      if (elem.match(/[a-zA-Z]/)) {
        const elemIndex = this.words.indexOf(elem.toLowerCase());
        const keyElemeIndex = this.words.indexOf(keyWords[index].toLowerCase());

        if (elemIndex - keyElemeIndex >= 0) {
          result.push(this.words[elemIndex - keyElemeIndex].toUpperCase());
        } else {
          result.push(
            this.words[elemIndex - keyElemeIndex + countWordIndex].toUpperCase()
          );
        }
      } else {
        result.push(elem);
      }
    });
    return this.notReverseCrypt ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
