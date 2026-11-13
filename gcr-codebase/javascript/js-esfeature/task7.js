"use strict";

class DivideByZeroError extends Error {
  constructor(msg) { super(msg); this.name = "DivideByZeroError"; }
}
class NegativeRootError extends Error {
  constructor(msg) { super(msg); this.name = "NegativeRootError"; }
}
class InvalidOperationError extends Error {
  constructor(msg) { super(msg); this.name = "InvalidOperationError"; }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new DivideByZeroError("Cannot divide by zero");
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) throw new NegativeRootError("Cannot take the root of a negative number");
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(`Operation "${op}" is not recognized`);
  }
}

const summary = [];

// "modulus" is added to demonstrate InvalidOperationError
for (const op of [...operations, "modulus"]) {
  try {
    const result = calculate(op, num1, num2);
    summary.push({ op, status: "SUCCESS", detail: result });
  } catch (err) {
    summary.push({ op, status: "ERROR", detail: `${err.name}: ${err.message}` });
  }
}

// Also test root of a negative number
try {
  calculate("root", -9, 0);
} catch (err) {
  summary.push({ op: "root(-9)", status: "ERROR", detail: `${err.name}: ${err.message}` });
}

console.log(`===== CALCULATOR SUMMARY (num1=${num1}, num2=${num2}) =====`);
for (const row of summary) {
  console.log(`${row.op.padEnd(10)} | ${row.status.padEnd(7)} | ${row.detail}`);
}