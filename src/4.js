const math = require('mathjs');

function add(a, b) {
  return math.add(a, b);
}

function subtract(a, b) {
  return math.subtract(a, b);
}

function multiply(a, b) {
  return math.multiply(a, b);
}

function divide(a, b) {
  return math.divide(a, b);
}

module.exports = { add, subtract, multiply, divide };
