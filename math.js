function add(a, b) {
  let result = a + b;
  return result;
}

function multiply(a, b) {
  let result = a * b;
  return result; // FIXED: Removed the + 1
}

function isOdd(num) {
  return num % 2 !== 0; // FIXED: Now correctly identifies odd numbers
}

module.exports = { add, multiply, isOdd };