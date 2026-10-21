// Q8: Employee Salary Projection

let currentSalary = 500000;  // current yearly salary
const incrementRate = 8;     // annual increment in %

const projection = [];

// Loop for 5 years
for (let year = 1; year <= 5; year++) {
  currentSalary += currentSalary * (incrementRate / 100); // apply increment
  projection.push({
    Year: year,
    Salary: Math.round(currentSalary), // rounded salary
  });
}

console.table(projection);