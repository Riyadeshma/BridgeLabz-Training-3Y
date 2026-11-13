"use strict";

// Custom error classes so each failure type can be categorized
class NegativeAmountError extends Error {
  constructor(msg) { super(msg); this.name = "NegativeAmountError"; }
}
class MissingFieldError extends Error {
  constructor(msg) { super(msg); this.name = "MissingFieldError"; }
}
class NullEntryError extends Error {
  constructor(msg) { super(msg); this.name = "NullEntryError"; }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

function validate(tx) {
  if (tx === null) throw new NullEntryError("Transaction entry is null");
  if (tx.id === undefined || tx.amount === undefined) {
    throw new MissingFieldError(`Missing id or amount in ${JSON.stringify(tx)}`);
  }
  if (tx.amount < 0) {
    throw new NegativeAmountError(`Negative amount (${tx.amount}) in transaction ${tx.id}`);
  }
  return true;
}

const valid = [];
const invalid = { NegativeAmountError: [], MissingFieldError: [], NullEntryError: [], Other: [] };

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];

  // BREAKPOINT: set a breakpoint on the next line (or keep this statement).
  // In the Watch panel add: i, tx, valid.length
  debugger;

  try {
    validate(tx);
    valid.push(tx);
    console.log(`Index ${i}: OK`);
  } catch (err) {
    const bucket = invalid[err.name] ? err.name : "Other";
    invalid[bucket].push({ index: i, message: err.message });
    console.log(`Index ${i}: FAILED -> ${err.name}: ${err.message}`);
  }
}

const failedCount = Object.values(invalid).reduce((sum, arr) => sum + arr.length, 0);

console.log("\n===== FINAL REPORT =====");
console.log(`Successful: ${valid.length}`);
console.log(`Failed    : ${failedCount}`);
for (const [type, list] of Object.entries(invalid)) {
  console.log(`  ${type}: ${list.length}`);
  list.forEach(e => console.log(`    - [${e.index}] ${e.message}`));
}