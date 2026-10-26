"use strict";

// Mixed API data. null/undefined are "missing" values from the API.
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidEntries = [];

// Debug observation: Number(" ") is 0 and Number(null) is 0, which looks "valid".
// The task says to skip " ", and null/undefined mean "no data", so we check for those
// explicitly before trusting Number().
function isValidNumeric(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string" && value.trim() === "") return false;
  return !Number.isNaN(Number(value));
}

for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];

  // Three conversions of the same value
  const asNumber = Number(raw);
  const asBoolean = Boolean(raw); // Observation: Boolean("false") is true (non-empty string)
  const asString = String(raw);   // Observation: String(null) is "null", String(undefined) is "undefined"

  const record = { index: i, raw, asNumber, asBoolean, asString };

  if (isValidNumeric(raw)) {
    validNumbers.push(record);
    console.log(`[VALID  ] #${i} raw=${JSON.stringify(raw)} -> Number=${asNumber}, Boolean=${asBoolean}, String="${asString}"`);
  } else {
    invalidEntries.push(record);
    console.log(`[INVALID] #${i} raw=${JSON.stringify(raw)} -> Number=${asNumber}, Boolean=${asBoolean}, String="${asString}"`);
  }
}

console.log("\n===== REPORT =====");
console.log(`Total items   : ${apiData.length}`);
console.log(`Valid numeric : ${validNumbers.length}`);
console.log(`Invalid       : ${invalidEntries.length}`);

console.log("\nValid numeric data:");
for (const item of validNumbers) {
  console.log(`  index ${item.index}: ${item.asNumber}`);
}

console.log("\nInvalid data (logged separately):");
for (const item of invalidEntries) {
  const reason =
    item.raw === null || item.raw === undefined ? "missing value" :
    String(item.raw).trim() === "" ? "blank string" :
    "cannot convert to number";
  console.log(`  index ${item.index}: ${JSON.stringify(item.raw)} (${reason})`);
}