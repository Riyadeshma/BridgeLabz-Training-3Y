"use strict";

// ---------- 1) Original code with hoisting explained ----------
// Memory state after the creation phase (before any line executes):
//   score     (var)      -> hoisted, initialized to undefined
//   announce  (function) -> hoisted with its full body, callable immediately
//   status    (let)      -> hoisted but in the Temporal Dead Zone until its line runs
//   startGame (function) -> hoisted with its full body

console.log(score);   // undefined (var exists but has no value yet)
announce();           // "Game started" (function declarations are fully hoisted)
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();          // "ready" -> status was already initialized before this call
function startGame() {
  console.log(status);
}

console.log("\n--- 2) Fixed version (no surprises) ---");
// Fix: declare and assign before use; prefer let/const over var.
const fixedScore = 50;
function announceFixed() { console.log("Game started"); }
let fixedStatus = "ready";
function startGameFixed() { console.log(fixedStatus); }

console.log(fixedScore);
announceFixed();
startGameFixed();

console.log("\n--- 3) Arrow function version ---");
// Arrow functions assigned to const/let are NOT hoisted as callable values.
// The binding is in the TDZ until the line executes.
try {
  announceArrow(); // ReferenceError: Cannot access 'announceArrow' before initialization
} catch (err) {
  console.log(`Caught ${err.name}: ${err.message}`);
}

const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(fixedStatus);

announceArrow();   // works now, since it's called after the definition
startGameArrow();