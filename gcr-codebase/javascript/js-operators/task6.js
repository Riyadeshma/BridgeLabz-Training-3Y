// Q6: Event-Based Counter Simulation

// Counter variable in the outer (global) scope
let count = 0;

function increment() {
  // Nested function that updates the outer count variable
  function updateCount() {
    count++;
    console.log("Count after increment:", count);
  }
  updateCount();
}

function decrement() {
  // Nested function that updates the outer count variable
  function updateCount() {
    count--;
    console.log("Count after decrement:", count);
  }
  updateCount();
}

// Simulate click events by calling the functions manually
increment();
increment();
increment();
decrement();
decrement();