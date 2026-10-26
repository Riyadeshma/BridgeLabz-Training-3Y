"use strict";

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  // Increases the monthly salary by the given percentage
  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, "Amit", "Engineering", 45000),
  new Employee(2, "Sara", "HR", 38000),
  new Employee(3, "Kiran", "Finance", 52000),
  new Employee(4, "Neha", "Marketing", 41000),
  new Employee(5, "Rahul", "Engineering", 60000)
];

console.log("Annual salaries:");
employees.forEach(e => {
  console.log(`${e.name.padEnd(6)} (${e.department.padEnd(11)}): ₹${e.getAnnualSalary().toLocaleString("en-IN")}`);
});

// Apply a 10% bonus to Sara
employees[1].applyBonus(10);
console.log(`\nSara after 10% bonus: ₹${employees[1].getAnnualSalary().toLocaleString("en-IN")}`);

// reduce() to get the total annual payout
const totalPayout = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log(`\nTotal annual payout: ₹${totalPayout.toLocaleString("en-IN")}`);