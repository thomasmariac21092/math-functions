const mathFunctions = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    return a / b;
  },

  power(base, exponent) {
    return Math.pow(base, exponent);
  },

  squareRoot(number) {
    return Math.sqrt(number);
  },

  factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  },
};

module.exports = mathFunctions;
