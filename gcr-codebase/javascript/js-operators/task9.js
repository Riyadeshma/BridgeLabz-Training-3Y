// Q9: Odd–Even Number Analyzer

// Fill the array with numbers 1 to 30 using a loop
const numbers = [];

for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

// Array to store the classification of each number
const results = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
    results.push("FizzBuzz"); // divisible by both 3 and 5
  } else if (numbers[i] % 2 === 0) {
    results.push("Even");     // divisible by 2
  } else {
    results.push("Odd");      // everything else
  }
}

// Display the final results array
console.log(results);