"use strict";
const readline = require("readline");

class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) return false; // already issued
    this.isIssued = true;
    return true;
  }

  returnBook() {
    if (!this.isIssued) return false; // was never issued
    this.isIssued = false;
    return true;
  }
}

const books = [
  new Book("Clean Code", "Robert Martin", "111"),
  new Book("JavaScript: The Good Parts", "Douglas Crockford", "222"),
  new Book("You Don't Know JS", "Kyle Simpson", "333", true),
  new Book("Eloquent JavaScript", "Marijn Haverbeke", "444")
];

function showAvailableBooks() {
  console.log("\nAvailable books:");
  books
    .filter(b => !b.isIssued)
    .forEach(b => console.log(`  [${b.ISBN}] ${b.title} by ${b.author}`));
}

showAvailableBooks();

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("\nEnter ISBN to issue: ", (isbn) => {
  // Search the array by ISBN
  const book = books.find(b => b.ISBN === isbn.trim());

  if (!book) {
    console.log("No book found with that ISBN.");
  } else if (book.issueBook()) {
    console.log(`Issued: "${book.title}"`);
  } else {
    console.log(`"${book.title}" is already issued.`);
  }

  showAvailableBooks();
  rl.close();
});