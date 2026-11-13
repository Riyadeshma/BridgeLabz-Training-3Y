"use strict";

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Coupon must look like SAVE20 or DISC10 (SAVE/DISC followed by 2 digits)
  applyCoupon(code) {
    const couponRegex = /^(SAVE|DISC)(\d{2})$/;
    const match = code.trim().toUpperCase().match(couponRegex);

    if (!match) {
      console.log(`Invalid coupon "${code}". Use a format like SAVE20 or DISC10.`);
      return this.getTotal();
    }

    const percent = Number(match[2]); // digits from the coupon = discount %
    const total = this.getTotal();
    const finalTotal = total - (total * percent) / 100;
    console.log(`Coupon ${match[0]} applied: ${percent}% off`);
    return finalTotal;
  }
}

const cart = new Cart();
cart.addItem("Laptop Bag", 1500, 1);
cart.addItem("Mouse", 599, 2);
cart.addItem("Pen Drive", 450, 3);

console.log("Items in cart:");
cart.items.forEach(i => console.log(`  ${i.name} x${i.quantity} = ₹${i.price * i.quantity}`));
console.log(`\nTotal: ₹${cart.getTotal()}`);

// Valid coupon
console.log(`Final total: ₹${cart.applyCoupon("SAVE20").toFixed(2)}`);

// Another valid coupon
console.log(`Final total: ₹${cart.applyCoupon("DISC10").toFixed(2)}`);

// Invalid coupon
console.log(`Final total: ₹${cart.applyCoupon("HELLO5").toFixed(2)}`);