// q5.js

// Parent constructor
function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log("Name: " + this.name);
};

// Child constructor
function Student(name, branch) {
  Person.call(this, name);   // inherit properties from Person
  this.branch = branch;
}

// Set up inheritance: Student.prototype -> Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;   // restore constructor reference

Student.prototype.printBranch = function () {
  console.log("Branch: " + this.branch);
};

// Prints both name and branch
Student.prototype.printDetails = function () {
  this.printName();      // from Person.prototype
  this.printBranch();    // from Student.prototype
};

const student1 = new Student("Riya", "CSE");
student1.printDetails();
// Name: Riya
// Branch: CSE

// Demonstrating the prototype chain
console.log(Object.getPrototypeOf(student1) === Student.prototype);                  // true
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype);          // true
console.log(student1 instanceof Student);                                            // true
console.log(student1 instanceof Person);                                             // true
// Chain: student1 -> Student.prototype -> Person.prototype -> Object.prototype -> null