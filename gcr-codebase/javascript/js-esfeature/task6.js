"use strict";

// 3) Row count from user input (default 5). Run: node q6.js 6
const arg = parseInt(process.argv[2], 10);
const rows = Number.isNaN(arg) || arg < 1 ? 5 : arg;

// --- Base pattern with let ---
console.log("Pyramid with let:");
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line.trimEnd());
}
// console.log(i); // ReferenceError: i is block-scoped to the loop

// --- 1) Replace let with var ---
console.log("\nPyramid with var:");
for (var a = 1; a <= rows; a++) {
  var text = "";
  for (var b = 1; b <= a; b++) {
    text += "* ";
  }
  console.log(text.trimEnd());
}
// Observation: output is identical, but var is function/global scoped, so the
// variables leak out of the loops and stay reusable/overwritable:
console.log(`After loops -> a=${a}, b=${b}, text="${text.trimEnd()}"`);
// a = rows + 1 (the value that ended the loop). This reuse is a classic source of bugs.

// --- 2) Debugging: breakpoint on `text += "* ";`, watch a, b, text.
//        Step with F10/F11 and see `b` reset to 1 for every new `a`,
//        while `text` is manually reset by `var text = ""`.

// --- 4) strict mode catches undeclared loop variables ---
function brokenLoop() {
  for (k = 0; k < 3; k++) { // k is never declared
    console.log(k);
  }
}
try {
  brokenLoop();
} catch (err) {
  console.log(`\nCaught ${err.name}: ${err.message}`); // ReferenceError: k is not defined
}