// Q8: Dynamic Discount Evaluator

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

// Original total before any discount, using reduce()
const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);

// Array to store prices after category discounts
const discountedItems = [];

// Loop through the cart and apply category-based discounts
for (let i = 0; i < cart.length; i++) {
  let discountRate = 0;

  if (cart[i].category === "electronics") {
    discountRate = 0.10; // 10% off electronics
  } else if (cart[i].category === "fashion") {
    discountRate = 0.05; // 5% off fashion
  }

  discountedItems.push({
    item: cart[i].item,
    price: cart[i].price * (1 - discountRate),
  });
}

// Total after category discounts, using reduce()
let finalTotal = discountedItems.reduce((sum, product) => sum + product.price, 0);

// Extra 5% overall discount if the original cart value exceeds 50000
if (originalTotal > 50000) {
  finalTotal *= 0.95;
}

console.log("Original Total:", originalTotal.toFixed(2));
console.log("Final Total:", finalTotal.toFixed(2));