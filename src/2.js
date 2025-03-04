function myMathFunction(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input. Expected two numbers.");
  }

  return a + b;
}
