// Q3: Monthly Expense Tracker

// Expenses for 5 categories: food, travel, rent, bills, leisure
const expenses = [4500, 2000, 12000, 3000, 1500];

// Calculate total using assignment operator (+=)
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
}

// Average per category
const average = total / expenses.length;

// Add 10% tax using arithmetic and assignment operators
let finalAmount = total;
finalAmount += total * 0.10;

console.log("Total Expenses:", total.toFixed(2));
console.log("Average Expense:", average.toFixed(2));
console.log("Final Amount (with 10% tax):", finalAmount.toFixed(2));