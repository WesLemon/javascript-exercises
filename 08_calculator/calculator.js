const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
  let sum = 0
	for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
};

const multiply = function(...args) {
  let product = 1
  for(let i = 0; i < args.length; i++) {
    product *= args[i]
  }
  return product
};

const power = function(base, exponent) {
  let result = 1
  for(let i = 0; i < exponent; i++) {
    result *= base
  }
  return result
};

const factorial = function(factorial) {
	let result = 1
  for(let i = factorial; i > 0; i--) {
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
