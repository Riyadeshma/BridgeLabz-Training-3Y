// q2.js
"use strict";

// Validation rules: regex + error message for each field
const rules = {
  name:     { regex: /^[A-Za-z ]+$/, message: "Name must contain only alphabets" },
  email:    { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email (example@domain.com)" },
  phone:    { regex: /^\d{10}$/, message: "Phone must be exactly 10 digits" },
  // Lookaheads: at least 1 uppercase, 1 digit, 1 special character
  password: { regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, message: "Password needs 1 uppercase, 1 number and 1 special character" }
};

// Validates one field, updates border colour and error text
function validateField(fieldId) {
  const input = document.getElementById(fieldId);
  const error = document.getElementById(fieldId + "Error");
  const isValid = rules[fieldId].regex.test(input.value);

  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
  error.textContent = isValid ? "" : rules[fieldId].message;
  return isValid;
}

// Live validation while typing
Object.keys(rules).forEach(id => {
  document.getElementById(id).addEventListener("input", () => validateField(id));
});

document.getElementById("regForm").addEventListener("submit", (event) => {
  event.preventDefault();
  // Validate every field (map, not every, so all fields show their errors)
  const results = Object.keys(rules).map(validateField);
  const allValid = results.every(Boolean);
  document.getElementById("result").textContent =
    allValid ? "Registration successful!" : "Please fix the errors above.";
  document.getElementById("result").style.color = allValid ? "green" : "red";
});