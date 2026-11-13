// q8.js

// Fails 50% of the time
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Order submitted");
      } else {
        reject(new Error("Network error"));
      }
    }, 500);
  });
}

async function processOrder() {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await submitOrder();
      console.log("Attempt " + attempt + ": Success");
      return "Order processed successfully";   // stop retrying on success
    } catch (error) {
      console.log("Attempt " + attempt + ": Failed");
    }
  }

  // Reached only if all attempts failed
  throw "Order could not be processed";
}

// Handle the final failure gracefully
async function main() {
  try {
    const result = await processOrder();
    console.log(result);
  } catch (finalError) {
    console.log("Error: " + finalError);
  }
}

main();