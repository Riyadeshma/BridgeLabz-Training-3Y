// q1.js

// Callback function: runs after the greeting is printed
function showEndMessage() {
  console.log("Welcome to the course!");
}

// Main function: prints greeting, then calls the callback
function greetUser(name, callback) {
  console.log("Hello " + name);   // Step 1: greeting
  callback();                      // Step 2: callback runs after greeting
}

// Demonstration of callback flow
greetUser("Riya", showEndMessage);

// Output:
// Hello Riya
// Welcome to the course!