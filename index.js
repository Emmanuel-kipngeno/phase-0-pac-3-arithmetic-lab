// Basic Math
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  // Math + Assignment
  function increment(n) {
    return n += 1;
  }
  
  function decrement(n) {
    return n -= 1;
  }
  
  // Parsing Numbers
  function makeInt(string) {
    return parseInt(string, 10);
  }
  
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal,
  };
  