// q9.js

/*
 PREDICTED OUTPUT ORDER (written before running):
 1. Script start
 2. Script end
 3. Promise callback
 4. Timeout callback
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
 ACTUAL OUTPUT:
 Script start
 Script end
 Promise callback
 Timeout callback

 The actual output matches the prediction.

 Explanation:
 - "Script start" and "Script end" are synchronous, so they run first on the
   call stack.
 - setTimeout hands its callback to the Web API/timer, which later places it
   in the MACROTASK queue.
 - Promise.resolve().then() places its callback in the MICROTASK queue.
 - When the call stack is empty, the Event Loop always empties the microtask
   queue completely before taking the next macrotask.
 - So "Promise callback" runs before "Timeout callback", even though the
   timeout delay is 0 ms.
*/