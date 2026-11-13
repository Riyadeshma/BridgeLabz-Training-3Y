"use strict"; // Any accidental implicit global (e.g. forgetting `const`) now throws ReferenceError

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

function calculateBonus(emp) {
  // Missing property check
  if (!("name" in emp) || !("salary" in emp) || !("years" in emp)) {
    throw new Error("Missing property in employee record");
  }

  // String -> Number conversion
  const salary = Number(emp.salary);
  const years = Number(emp.years);

  if (Number.isNaN(salary) || Number.isNaN(years)) {
    throw new TypeError(`Conversion failed for ${emp.name}`);
  }

  // bonus = 10% if years > 3, else 5%
  const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
  return { name: emp.name, salary, years, bonus };
}

for (const emp of employees) {
  try {
    const r = calculateBonus(emp);
    console.log(
      `Employee: ${r.name.padEnd(6)} | Salary: ₹${r.salary.toLocaleString("en-IN")} | ` +
      `Years: ${r.years} | Bonus: ₹${r.bonus.toFixed(2)}`
    );
  } catch (err) {
    console.log(`Error processing employee: ${err.message}`);
  }
}

// Demonstrate the try...catch with bad data
try {
  calculateBonus({ name: "Ghost", salary: "abc", years: "3" });
} catch (err) {
  console.log(`Caught (${err.name}): ${err.message}`);
}
try {
  calculateBonus({ name: "NoSalary", years: "3" });
} catch (err) {
  console.log(`Caught (${err.name}): ${err.message}`);
}