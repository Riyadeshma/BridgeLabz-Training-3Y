// q2.js

console.log("Start");

// Macrotask: goes to the macrotask (callback) queue
setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

// Microtask: goes to the microtask queue
Promise.resolve().then(() => {
  console.log("Promise.then callback (microtask)");
});

// Synchronous log: runs immediately on the call stack
console.log("Synchronous log");

console.log("End");

/*
 Output:
 Start
 Synchronous log
 End
 Promise.then callback (microtask)
 setTimeout callback (macrotask)

 Explanation:
 1. All synchronous code runs first on the call stack
    (Start, Synchronous log, End).
 2. When the call stack becomes empty, the Event Loop first drains the
    ENTIRE microtask queue (Promise callbacks, queueMicrotask).
 3. Only after the microtask queue is empty does the Event Loop pick ONE
    task from the macrotask queue (setTimeout, setInterval, I/O).
 4. So even with a 0 ms delay, setTimeout runs after the promise callback,
    because microtasks always have higher priority than macrotasks.
*/