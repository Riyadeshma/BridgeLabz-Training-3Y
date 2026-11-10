// q4.js

// Creates a server promise that responds after `delay` ms.
// Randomly fails ~20% of the time.
function deployToServer(serverName, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(serverName + " failed to respond!");
      } else {
        resolve(serverName + " responded");
      }
    }, delay);
  });
}

// Note: create fresh promises for each combinator so each has its own timers
// Promise.all: waits for ALL servers (rejects immediately if any one fails)
Promise.all([
  deployToServer("Server A", 2000),
  deployToServer("Server B", 3000),
])
  .then((results) => {
    console.log(results);
    console.log("Deployment completed for all servers");
  })
  .catch((error) => {
    console.log("Promise.all error: " + error);
  });

// Promise.race: settles as soon as the FIRST server settles
Promise.race([
  deployToServer("Server A", 2000),
  deployToServer("Server B", 3000),
])
  .then((fastest) => {
    console.log("Fastest response: " + fastest);   // Server A (2s < 3s)
  })
  .catch((error) => {
    console.log("Promise.race error: " + error);
  });