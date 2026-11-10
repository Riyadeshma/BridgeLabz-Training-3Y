// q3.js

// Original callback-based function
function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// Flag to simulate API failure (change to true to test the failure path)
const simulateApiFailure = false;
// For random failure instead, use: const simulateApiFailure = Math.random() < 0.3;

// Promise-based version
function getBugs() {
  return new Promise((resolve, reject) => {
    // Reuse the old callback function and wrap it in a Promise
    fetchBugs((bugs) => {
      if (simulateApiFailure) {
        reject("API Error: Could not fetch bugs");
      } else {
        resolve(bugs);
      }
    });
  });
}

console.log("Fetching bugs...");

getBugs()
  .then((bugs) => {
    // Convert to array of objects so console.table shows a neat ID column
    const bugTable = bugs.map((bug, index) => ({ ID: index + 1, Bug: bug }));
    console.table(bugTable);
  })
  .catch((error) => {
    console.log(error);
  });