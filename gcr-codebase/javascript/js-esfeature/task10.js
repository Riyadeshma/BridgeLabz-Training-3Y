"use strict";

// ---------- 1) Original code ----------
function outer() {
  console.log(count); // undefined
  var count = 5;
  function inner() {
    console.log(count); // undefined
    var count = 10;
  }
  inner();
}
outer();

// PREDICTED OUTPUT:
//   undefined
//   undefined
//
// WHY:
// - outer's creation phase hoists `var count` (= undefined) and function `inner`.
// - So the first log prints undefined, not a ReferenceError. Then count becomes 5.
// - inner has its OWN hoisted `var count` (= undefined) that shadows outer's count.
//   The log inside inner reads that local count (undefined), not outer's 5.
//   The closure does not help here because inner's local declaration wins.

// ---------- 2) Separate memory contexts ----------
// Global context : { outer: function }
// outer() context: { count: undefined -> 5, inner: function }
// inner() context: { count: undefined -> 10 }  (its own variable, separate from outer's)
// Each function call creates a new execution context with its own variable environment.

// ---------- 3) Arrow function version ----------
function outerArrow() {
  console.log(count); // undefined (var is still hoisted)
  var count = 5;

  // Arrow function assigned to const: not callable before this line (TDZ)
  const inner = () => {
    console.log(count); // undefined (the inner `var count` is still hoisted)
    var count = 10;
  };
  inner();
}
outerArrow();

// Differences to note:
// - Calling inner() BEFORE its definition now throws ReferenceError (TDZ),
//   while a function declaration would have worked.
// - Arrow functions have no own `this` or `arguments`; var hoisting inside them
//   behaves the same as in a regular function.
try {
  (function demoTDZ() {
    innerEarly(); // ReferenceError: Cannot access 'innerEarly' before initialization
    const innerEarly = () => console.log("never reached");
  })();
} catch (err) {
  console.log(`Caught ${err.name}: ${err.message}`);
}

// ---------- 4) Debug session ----------
// 1. Put breakpoints on `console.log(count)` in outer and in inner, and on `inner();`.
// 2. Press F5. CALL STACK when paused inside inner:
//        inner
//        outer
//        (anonymous) / Module._compile  <- top-level script
// 3. The Variables panel shows the Local scope of each frame. Click "outer" to see
//    count = 5 and click "inner" to see count = undefined (separate variables).
// 4. Step with F10 (over) / F11 (into). When inner returns, its frame pops off the
//    stack and control goes back to outer, then to the global frame.