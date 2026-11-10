// q6.js

// Level 1: Person
function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function () {
  console.log("Hi, I am " + this.name);
};

// Level 2: Faculty (inherits Person)
function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () {
  console.log("Department: " + this.department);
};

// Level 3: Professor (inherits Faculty)
function Professor(name, department, researchArea) {
  Faculty.call(this, name, department);
  this.researchArea = researchArea;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showResearch = function () {
  console.log("Research Area: " + this.researchArea);
};

// Demonstration: the Professor object accesses methods all the way up the chain
const prof = new Professor("Dr. Sharma", "Computer Science", "Machine Learning");

prof.introduce();        // from Person.prototype
prof.showDepartment();   // from Faculty.prototype
prof.showResearch();     // from Professor.prototype

console.log(prof instanceof Professor);   // true
console.log(prof instanceof Faculty);     // true
console.log(prof instanceof Person);      // true
// Chain: prof -> Professor.prototype -> Faculty.prototype -> Person.prototype -> Object.prototype -> null