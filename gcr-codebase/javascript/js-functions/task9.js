// q9.js

// ---------- ES6 Class version ----------
class PersonClass {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log("Name: " + this.name);
  }
}

class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name);          // calls the parent constructor
    this.branch = branch;
  }
  printBranch() {
    console.log("Branch: " + this.branch);
  }
  printDetails() {
    this.printName();
    this.printBranch();
  }
}

// ---------- Prototype version (from Q5) ----------
function Person(name) {
  this.name = name;
}
Person.prototype.printName = function () {
  console.log("Name: " + this.name);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.printBranch = function () {
  console.log("Branch: " + this.branch);
};
Student.prototype.printDetails = function () {
  this.printName();
  this.printBranch();
};

// ---------- Compare both ----------
const s1 = new StudentClass("Riya", "CSE");
const s2 = new Student("Riya", "CSE");

console.log("--- Class version ---");
s1.printDetails();
// Name: Riya
// Branch: CSE

console.log("--- Prototype version ---");
s2.printDetails();
// Name: Riya
// Branch: CSE

// Both use the same prototype chain mechanism underneath
console.log(Object.getPrototypeOf(s1) === StudentClass.prototype);                     // true
console.log(Object.getPrototypeOf(StudentClass.prototype) === PersonClass.prototype);  // true
console.log(s1 instanceof PersonClass);                                                // true

console.log(Object.getPrototypeOf(s2) === Student.prototype);                          // true
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype);            // true
console.log(s2 instanceof Person);                                                     // true

// typeof class is "function": classes are syntactic sugar over constructor functions
console.log(typeof StudentClass);   // "function"