// Q7: Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words by splitting the string on spaces
const wordCount = feedback.split(" ").length;

// Convert to lowercase so the check is not case-sensitive
const lowerFeedback = feedback.toLowerCase();

// Check whether the feedback contains negative words
const hasNegativeWords = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log("Word Count:", wordCount);

// Print result based on the check
if (!hasNegativeWords) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}