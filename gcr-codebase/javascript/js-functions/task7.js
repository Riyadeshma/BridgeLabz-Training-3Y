// q7.js

function makeMultiplier(multiplier) {
  // This inner function "remembers" the multiplier variable
  return function (number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5));   // 15
console.log(double(5));   // 10

/*
 Explanation of closure:
 - When makeMultiplier(3) runs, it creates a local variable `multiplier = 3`
   and returns the inner function.
 - Normally, after makeMultiplier finishes, its local variables would be
   destroyed. But the inner function still references `multiplier`, so
   JavaScript keeps that variable alive in memory.
 - This combination of a function plus the variables from the scope where it
   was created is called a closure.
 - Each call to makeMultiplier creates a separate closure, so triple keeps
   multiplier = 3 and double keeps multiplier = 2, independently.
*/