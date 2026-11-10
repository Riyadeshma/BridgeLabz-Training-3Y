// q5.js

// ---------- Part 1: Callback Hell (nested callbacks) ----------
function design(callback) {
  setTimeout(() => {
    console.log("Callback: Design done");
    callback();
  }, 1000);
}
function build(callback) {
  setTimeout(() => {
    console.log("Callback: Build done");
    callback();
  }, 1000);
}
function test(callback) {
  setTimeout(() => {
    console.log("Callback: Test done");
    callback();
  }, 1000);
}
function deploy(callback) {
  setTimeout(() => {
    console.log("Callback: Deploy done");
    callback();
  }, 1000);
}
function celebrate(callback) {
  setTimeout(() => {
    console.log("Callback: Celebrate!");
    callback();
  }, 1000);
}

function runWithCallbacks(done) {
  // Pyramid of doom: every stage nests one level deeper
  design(() => {
    build(() => {
      test(() => {
        deploy(() => {
          celebrate(() => {
            console.log("Callback pipeline finished\n");
            done();   // start the async/await version after this finishes
          });
        });
      });
    });
  });
}

// ---------- Part 2: async/await version ----------
function stage(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async/Await: " + name);
      resolve();
    }, 1000);
  });
}

async function runWithAsyncAwait() {
  await stage("Design done");
  await stage("Build done");
  await stage("Test done");
  await stage("Deploy done");
  await stage("Celebrate!");
  console.log("Async/Await pipeline finished");
}

// Run callbacks first, then the async/await version
runWithCallbacks(runWithAsyncAwait);

/*
 Why async/await improves readability:
 - Code reads top to bottom like synchronous code, no nesting.
 - Adding or removing a stage is one line instead of re-indenting a pyramid.
 - Error handling is simple with one try/catch instead of checking errors
   inside every callback.
 - Easier to debug: stack traces and flow are clearer.
*/