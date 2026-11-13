// q7.js
"use strict";

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errors = [];

  // Username: at least 5 characters
  if (!/^.{5,}$/.test(username)) {
    errors.push("Username must be at least 5 characters.");
  }

  // Password: check each rule separately so we can show specific messages
  if (!/^.{8,}$/.test(password))        errors.push("Password must be at least 8 characters.");
  if (!/\d/.test(password))             errors.push("Password must include a number.");
  if (!/[A-Z]/.test(password))          errors.push("Password must include an uppercase letter.");
  if (!/[a-z]/.test(password))          errors.push("Password must include a lowercase letter.");
  if (!/[^A-Za-z0-9]/.test(password))   errors.push("Password must include a special character.");

  const box = document.getElementById("messages");
  if (errors.length === 0) {
    box.innerHTML = '<p class="success">Login successful!</p>';
  } else {
    box.innerHTML = errors.map(e => `<p class="error">${e}</p>`).join("");
  }
});