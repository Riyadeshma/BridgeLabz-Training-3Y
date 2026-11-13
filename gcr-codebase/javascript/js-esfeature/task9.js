"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const requiredKeys = ["user", "age"];

for (let i = 0; i < rawData.length; i++) {
  const lineNo = i + 1;

  // DEBUG: breakpoint on the next line, watch i, lineNo, rawData[i].
  // On '{invalid}', JSON.parse throws, so control jumps straight into catch and
  // the remaining lines of the try block are skipped. Then the loop continues.
  try {
    const obj = JSON.parse(rawData[i]);

    const missing = requiredKeys.filter(key => !(key in obj));
    if (missing.length > 0) {
      throw new Error(`Missing key(s): ${missing.join(", ")}`);
    }

    cleanData.push(obj);
  } catch (err) {
    const type = err instanceof SyntaxError ? "Invalid JSON" : "Validation error";
    errors.push({ line: lineNo, type, message: err.message });
    console.log(`Line ${lineNo}: ${type} -> ${err.message}`);
  }
}

console.log("\nClean entries:", cleanData);
console.log(`Errors: ${errors.length}`);
errors.forEach(e => console.log(`  Line ${e.line} [${e.type}]: ${e.message}`));

// ---------- Bonus: convert age to Number and filter out under-18 users ----------
const adults = cleanData
  .map(u => ({ ...u, age: Number(u.age) }))
  .filter(u => !Number.isNaN(u.age) && u.age >= 18);

console.log("\nAdults (age >= 18):", adults);