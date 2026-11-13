// Q6: Progressive Discount System

const totalAmount = 6500; // purchase total

let discountPercent;

// Decide discount tier
if (totalAmount >= 10000) {
  discountPercent = 25;
} else if (totalAmount >= 5000) {
  discountPercent = 15;
} else if (totalAmount >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

// Calculate final price and round it
const discountAmount = (totalAmount * discountPercent) / 100;
const finalPrice = Math.round(totalAmount - discountAmount);

console.log("Original Total:", totalAmount);
console.log("Discount Percentage:", discountPercent + "%");
console.log("Final Price:", finalPrice);