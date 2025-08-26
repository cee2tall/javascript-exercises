const palindromes = function (str) {
  for (let left = 0, right = str.length - 1; left < right; left++, right--) {
    if (str.at(left) !== str.at(right)) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
