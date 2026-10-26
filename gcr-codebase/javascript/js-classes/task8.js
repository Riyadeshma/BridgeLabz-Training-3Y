// q8.js
"use strict";

const user = { name: "John", email: "john@mail.com", age: 21 };

const fields = ["name", "email", "age"];

// Show the current object below the form
function showUser() {
  document.getElementById("display").innerHTML = `
    <h3>Current user object</h3>
    <p><b>Name:</b> ${user.name}</p>
    <p><b>Email:</b> ${user.email}</p>
    <p><b>Age:</b> ${user.age}</p>
    <pre>${JSON.stringify(user, null, 2)}</pre>`;
}

// Fill the form with the initial values
fields.forEach(key => {
  document.getElementById(key).value = user[key];
});

// Update the object in real time while typing
fields.forEach(key => {
  document.getElementById(key).addEventListener("input", (e) => {
    user[key] = key === "age" ? Number(e.target.value) : e.target.value;
    showUser();
  });
});

// Submit also updates (and prevents page reload)
document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault();
  fields.forEach(key => {
    const value = document.getElementById(key).value;
    user[key] = key === "age" ? Number(value) : value;
  });
  console.log("Updated user:", user);
  showUser();
});

showUser();