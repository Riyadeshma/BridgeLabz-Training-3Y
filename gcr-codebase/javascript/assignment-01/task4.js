// Q4: Academic Performance Evaluator

// Marks of 5 subjects (each out of 100)
const marks = [78, 88, 92, 81, 90];

// Calculate total, average and percentage
let totalMarks = 0;
for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i];
}
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

// Validation: check if any subject is below 35
let failedSubject = false;
for (let i = 0; i < marks.length; i++) {
  if (marks[i] < 35) {
    failedSubject = true;
    break;
  }
}

console.log("Average:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");

// Decide result using logical operators
if (failedSubject || percentage < 50) {
  console.log("Detained");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
  console.log("Promoted");
}