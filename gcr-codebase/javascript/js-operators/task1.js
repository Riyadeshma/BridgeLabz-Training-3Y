// Q1: Scope Conflict Resolver

// Global variable: accessible everywhere in the script
const bonus = 5000;

function calculateSalary(isPermanent) {
  // Local variable: exists only inside this function
  let salary = 40000;

  // Add the global bonus only for permanent employees
  if (isPermanent) {
    salary += bonus;
  }

  // Print the total salary from inside the function
  console.log(`Total salary (isPermanent = ${isPermanent}):`, salary);
}

// Changing isPermanent changes the local salary only
calculateSalary(true);
calculateSalary(false);

// The global bonus is never modified, only read
console.log("Global bonus after both calls:", bonus);

// salary is local, so typeof returns "undefined" outside the function
console.log("Is salary accessible outside the function?", typeof salary);