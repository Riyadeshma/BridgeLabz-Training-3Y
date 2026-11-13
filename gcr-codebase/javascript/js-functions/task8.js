// q8.js

// Custom implementation of map()
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // callback receives (element, index, array), same as built-in map
    result.push(callback(this[i], i, this));
  }
  return result;
};

console.log([1, 2, 3].myMap((num) => num * 2));            // [2, 4, 6]
console.log(["a", "b"].myMap((ch, i) => ch + i));          // ["a0", "b1"]

// Compare with the built-in map
console.log([1, 2, 3].map((num) => num * 2));              // [2, 4, 6]