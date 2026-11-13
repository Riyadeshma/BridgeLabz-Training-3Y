// q7.js

function loadProfile() { return new Promise(r => setTimeout(() => r("Profile Loaded"), 2000)); }
function loadPosts() { return new Promise(r => setTimeout(() => r("Posts Loaded"), 1500)); }
function loadMessages() { return new Promise(r => setTimeout(() => r("Messages Loaded"), 1000)); }

// Wraps a loader so that it rejects instead of resolving (used for the random failure)
function makeFail(loaderFunction, moduleName) {
  return () =>
    loaderFunction().then(() => {
      throw new Error(moduleName + " failed to load");
    });
}

async function loadDashboard() {
  const startTime = Date.now();

  const moduleNames = ["Profile", "Posts", "Messages"];
  const loaders = [loadProfile, loadPosts, loadMessages];

  // Randomly pick ONE module to reject
  const failingIndex = Math.floor(Math.random() * loaders.length);
  loaders[failingIndex] = makeFail(loaders[failingIndex], moduleNames[failingIndex]);

  // Start all loaders together; allSettled waits for every one to finish,
  // regardless of success or failure
  const results = await Promise.allSettled(loaders.map((load) => load()));

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(moduleNames[index] + " -> SUCCESS: " + result.value);
    } else {
      console.log(moduleNames[index] + " -> FAILED: " + result.reason.message);
    }
  });

  const endTime = Date.now();
  console.log("Total time taken: " + (endTime - startTime) + " ms");
  // About 2000 ms, because all three run in parallel and the slowest takes 2s
}

loadDashboard();