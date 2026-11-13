// Q4: Array Performance Analyzer

// Create an array of 8 random scores between 30 and 100
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

// Highest and lowest scores using spread operator
const highest = Math.max(...scores);
const lowest = Math.min(...scores);

// Average score using reduce()
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

// Count students who passed (score >= 50) using filter()
const passedCount = scores.filter((score) => score >= 50).length;

// Label each score as Pass or Fail using map()
const gradedScores = scores.map((score) => `${score} (${score >= 50 ? "Pass" : "Fail"})`);

// Display the full summary
console.log("Scores:", gradedScores.join(", "));
console.log("Highest Score:", highest);
console.log("Lowest Score:", lowest);
console.log("Average Score:", average.toFixed(2));
console.log("Students Passed:", passedCount, "out of", scores.length);