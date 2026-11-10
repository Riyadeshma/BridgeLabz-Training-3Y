// q2.js

// Takes an array and a callback; applies the callback to each element
function applyOperation(numbers, operation) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i]));   // callback applied to each number
  }
  return result;
}

const numbers = [1, 2, 3, 4];

// Callback 1: double a number
const doubled = applyOperation(numbers, (num) => num * 2);
console.log("Doubled:", doubled);   // [2, 4, 6, 8]

// Callback 2: square a number
const squared = applyOperation(numbers, (num) => num * num);
console.log("Squared:", squared);   // [1, 4, 9, 16]