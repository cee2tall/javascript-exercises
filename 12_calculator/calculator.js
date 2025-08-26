const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  return nums.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function (nums) {
  return nums.reduce((product, curr) => product * curr);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let curr = 1;
  for (a; a > 0; a--) {
    curr *= a;
  }
  return curr;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
