"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Reduces price by the given percentage (default 10%)
  applyDiscount(percent = 10) {
    this.price = this.price - (this.price * percent) / 100;
  }

  // Returns a formatted string with product details
  getDetails() {
    return `#${this.id} | ${this.name.padEnd(12)} | ${this.category.padEnd(12)} | ₹${this.price.toFixed(2)}`;
  }
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 599, "Accessories"),
  new Product(3, "Keyboard", 1499, "Accessories"),
  new Product(4, "Headphones", 2999, "Electronics"),
  new Product(5, "Notebook", 120, "Stationery")
];

console.log("All products:");
products.forEach(p => console.log(p.getDetails()));

// Apply 10% discount to the laptop
products[0].applyDiscount(10);
console.log("\nAfter 10% discount on Laptop:");
console.log(products[0].getDetails());

// Products with price > 1000
console.log("\nProducts with price > 1000:");
products.filter(p => p.price > 1000).forEach(p => console.log(p.getDetails()));