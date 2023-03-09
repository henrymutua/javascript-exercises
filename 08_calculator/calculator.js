const add = function(a, b, ...args) {
  let sum = a+b;
  for(const arg of args){
    sum +=arg;
  }
	return sum;
};

const subtract = function(a, b, ...args) {
  let diff = a-b;
  for(const arg of args){
    diff -=arg;
  }
	return diff;

};

const sum = function(a, b, ...args) {
  let addition = a+b;
  for(const arg of args){
    addition +=arg;
  }
	return addition;
};

const multiply = function(a, b, ...args) {
  let multi = a*b;
  for(const arg of args){
    multi*=arg;
  }
  return multi;
};

const power = function(a, b, ...args) {
  let powerfunc = a**b;
  for(const arg of args){
    powerfunc**=arg;
  }
	return powerfunc;
};

const factorial = function(...args) {
  if(args == 0 || args ==1)
  return 1;
  if(args<0)
  return -1;
  for(var i = args-1; i>=1; i--){
    args = args*i;
  }
	return args;
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
