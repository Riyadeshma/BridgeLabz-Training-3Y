// q10.js

// Generic helper: waits 1-2 seconds, then succeeds or fails (~15% failure chance).
// It returns a Promise, so the caller can `await` it without blocking the thread.
function asyncStep(stepName, successMessage) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;   // random 1-2 s delay

    // setTimeout hands the timer to the runtime (Web API / libuv in Node).
    // The call stack is free in the meantime; when the timer fires, the
    // callback is queued as a macrotask and then settles the promise.
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(stepName + " failed"));
      } else {
        resolve(successMessage);
      }
    }, delay);
  });
}

const takeOrder = () => asyncStep("takeOrder", "Step 1: Order taken");
const prepare   = () => asyncStep("prepare",   "Step 2: Food prepared");
const pack      = () => asyncStep("pack",      "Step 3: Package ready");
const dispatch  = () => asyncStep("dispatch",  "Step 4: Out for delivery");
const deliver   = () => asyncStep("deliver",   "Delivery completed!");

async function runPipeline() {
  console.log("Start Pipeline");

  try {
    // `await` pauses ONLY this async function. The rest of the program and
    // the event loop keep running. When the promise settles, its continuation
    // is queued as a microtask and the function resumes at the next line.
    console.log(await takeOrder());
    console.log(await prepare());
    console.log(await pack());
    console.log(await dispatch());
    console.log(await deliver());
  } catch (error) {
    // A rejected promise makes `await` throw, so control jumps here,
    // and the remaining steps are skipped automatically.
    console.log("Pipeline failed!");
    console.log("Reason: " + error.message);
  }
}

runPipeline();

// This runs immediately, proving runPipeline() does not block the main thread
console.log("(Main thread is free while the pipeline runs asynchronously)");