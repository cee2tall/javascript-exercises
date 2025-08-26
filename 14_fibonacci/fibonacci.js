const fibonacci = function (member) {
  if (+member < 0) {
    return "OOPS";
  } else if (+member === 0) {
    return 0;
  }
  if (+member === 1 || +member === 2) {
    return 1;
  } else {
    let left = 1,
      current = 3,
      num = 2;

    while (current < +member) {
      let prev = left;
      left = num;
      num += prev;
      current++;
    }
    return num;
  }
};

// Do not edit below this line
module.exports = fibonacci;

// 1 1 2 3 5 8 13
