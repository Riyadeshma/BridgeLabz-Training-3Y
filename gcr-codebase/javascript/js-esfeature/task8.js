// NOTE: no "use strict" at the top of this file, on purpose.

// ---------- 1) WITHOUT strict mode (sloppy mode) ----------
function demo(a, a) {      // allowed: the second `a` wins
  total = 10;              // allowed: creates an implicit global
  console.log("a =", a);   // 10 (the last duplicate overwrites the first)
  console.log("total =", total);
  console.log("delete total ->", delete total); // true: implicit globals are deletable
  console.log("typeof total after delete:", typeof total); // "undefined"
}
demo(5, 10);

// ---------- 2) WITH strict mode: each rule tested separately ----------
const tests = {
  "Duplicate parameter names": `"use strict"; function demo(a, a) {}`,
  "Assignment to undeclared variable": `"use strict"; total = 10;`,
  "delete on a plain variable": `"use strict"; var total = 10; delete total;`
};

console.log("\n--- Strict mode results ---");
for (const [label, code] of Object.entries(tests)) {
  try {
    new Function(code)();
    console.log(`${label}: no error`);
  } catch (err) {
    console.log(`${label}: ${err.name} -> ${err.message}`);
  }
}
// Expected:
//  Duplicate parameter names        -> SyntaxError (thrown at parse time)
//  Assignment to undeclared variable -> ReferenceError: total is not defined
//  delete on a plain variable       -> SyntaxError: Delete of an unqualified identifier

// ---------- 3) WHY strict mode forbids these ----------
// - Duplicate params: `a` becomes ambiguous (is it 5 or 10?). This is almost always a typo.
// - Implicit globals: a typo like `totl = 10` would silently create a new global.
//   Strict mode forces every variable to be declared.
// - delete on variables: variables are not properties you can remove. Only object
//   properties can be deleted. Allowing it hid bugs and blocked engine optimizations.

// ---------- 4) Correct ES6 version ----------
function demoFixed(first, second) {
  "use strict";
  let total = 10;                       // declared with let
  console.log(`first=${first}, second=${second}, total=${total}`);
  // Instead of delete, reassign if you need to "clear" a variable:
  total = null;
  console.log("total cleared ->", total);

  // delete is only valid on object properties:
  const obj = { total: 10 };
  delete obj.total;
  console.log("obj after delete:", obj);
}
demoFixed(5, 10);