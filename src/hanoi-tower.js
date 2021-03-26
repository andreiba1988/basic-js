const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
// мин кол-во шагов (2 ** n) - 1
  return {
    turns: (2 ** disksNumber) - 1,
    seconds: Math.floor(((2 ** disksNumber) - 1) / (turnsSpeed / 3600))
  }
};
