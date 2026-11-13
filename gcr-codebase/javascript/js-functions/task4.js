// q4.js

// Constructor function
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Method added to the prototype: shared by all Car objects
Car.prototype.getDetails = function () {
  console.log("Brand: " + this.brand + ", Model: " + this.model);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Hyundai", "Creta");

car1.getDetails();   // Brand: Toyota, Model: Fortuner
car2.getDetails();   // Brand: Hyundai, Model: Creta

// Proof that the method is shared (same function in memory)
console.log(car1.getDetails === car2.getDetails);                  // true
console.log(car1.hasOwnProperty("getDetails"));                    // false (not own property)
console.log(Object.getPrototypeOf(car1) === Car.prototype);        // true