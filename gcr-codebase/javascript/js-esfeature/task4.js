"use strict";

// ---------- 1) The buggy version ----------
function showMessageBroken() {
  greeting = "Welcome"; // never declared
  console.log(greeting);
}

try {
  showMessageBroken();
} catch (err) {
  // ReferenceError: greeting is not defined
  // WHY: Without "use strict", assigning to an undeclared name silently creates a
  // global (window.greeting / globalThis.greeting). Strict mode removes that
  // behaviour and throws instead, so typos can't leak globals.
  console.log(`Caught ${err.name}: ${err.message}`);
}

// ---------- 2) The fix ----------
function showMessage() {
  // Declaring with let/const gives `greeting` function scope (block scope for let),
  // so it exists only inside showMessage and does not pollute the global scope.
  let greeting = "Welcome";
  console.log(greeting);
}
showMessage();

console.log(typeof greeting); // "undefined" -> no global leak

// ---------- 3) Debug steps (VS Code) ----------
// 1. Put a breakpoint on `let greeting = "Welcome";` in showMessage.
// 2. Press F5 -> Run and Debug -> Node.js.
// 3. In the WATCH panel click "+" and add: greeting
//    (before the line runs it shows undefined/TDZ, after F10 it shows "Welcome").
// 4. In the CALL STACK panel you'll see: showMessage -> (anonymous / module code).
//    Click each frame to see its own scope in the VARIABLES panel.