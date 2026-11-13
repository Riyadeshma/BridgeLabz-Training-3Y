// Q2: String Manipulation Report

// Product name with extra spaces and inconsistent casing
const productName = "  wireless headphones PRO  ";

const cleanedTitle = productName
  .trim()                                                         // remove leading/trailing spaces
  .toLowerCase()                                                  // convert everything to lowercase
  .split(" ")                                                     // split into an array of words
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))    // capitalize first letter of each word
  .join(" ")                                                      // join the words back into a string
  .replace(/\bPro\b/, "Pro Edition");                             // replace the word "Pro" with "Pro Edition"

// Display the cleaned title and its length
console.log("Cleaned Title:", cleanedTitle);
console.log("Length:", cleanedTitle.length);