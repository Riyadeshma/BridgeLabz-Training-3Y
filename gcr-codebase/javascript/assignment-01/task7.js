// Q7: Smart Guessing Game (Number Range)

// Secret number between 1 and 50
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Test value for the user's guess
const userGuess = 25;

console.log("Your guess:", userGuess);
console.log("Secret number:", secretNumber);

// Nested if conditions
if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
    console.log("Very close!");
  } else {
    if (userGuess > secretNumber) {
      console.log("Too high");
    } else {
      console.log("Too low");
    }
  }
}