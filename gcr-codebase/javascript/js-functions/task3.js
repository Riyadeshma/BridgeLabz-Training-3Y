// q3.js

// Version 1: arrow function as a method
const user = {
  name: "Riya",
  showName: () => {
    console.log(this.name);
  }
};

user.showName();   // undefined

/*
 Explanation:
 Arrow functions do NOT have their own `this`. They inherit `this` from the
 surrounding (lexical) scope. Here, the surrounding scope is the module/global
 scope, not the `user` object (object literals do not create a scope).
 In Node.js modules, `this` is {} (module.exports); in the browser it is
 `window`. Neither has a `name` property set to "Riya", so this.name is undefined.
*/

// Version 2 (Fix): normal function as a method
const userFixed = {
  name: "Riya",
  showName: function () {
    console.log(this.name);
  }
};

userFixed.showName();   // Riya

/*
 A normal function gets its own `this`, determined by how it is called.
 Since it is called as userFixed.showName(), `this` refers to userFixed.
*/