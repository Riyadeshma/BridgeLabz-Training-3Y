// q1.js

// Helper: returns a random delay between 1000 and 2000 ms
function randomDelay() {
  return 1000 + Math.random() * 1000;
}

// Step 1: boil water (fails ~20% of the time to simulate a problem)
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Kettle stopped working while boiling water!");
      } else {
        console.log("Step 1: Water boiled");
        resolve();
      }
    }, randomDelay());
  });
}

// Step 2: brew coffee
function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Coffee machine jammed while brewing!");
      } else {
        console.log("Step 2: Coffee brewed");
        resolve();
      }
    }, randomDelay());
  });
}

// Step 3: pour coffee into a cup
function pourCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Cup slipped while pouring!");
      } else {
        console.log("Step 3: Coffee poured into cup");
        resolve();
      }
    }, randomDelay());
  });
}

console.log("Starting coffee process...");

// Promise chaining: each .then() waits for the previous step to finish
boilWater()
  .then(() => brewCoffee())
  .then(() => pourCoffee())
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch((error) => {
    // Any rejection in the chain jumps straight here
    console.log("Process failed: " + error);
  });