// Q2: Multi-Type Data Summary

// Variables of different data types
const userName = "Riya";
const userAge = 21;
const isStudent = true;
const skills = ["JavaScript", "AWS", "Django"];
const profile = { university: "GLA", year: 3 };
const middleName = null;
let phoneNumber; // undefined

// Helper: returns accurate type (handles array and null specially)
const getType = (value) => {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null"; // typeof null gives "object"
  return typeof value;
};

// One console.table() statement to print label, value and type
console.table([
  { Label: "userName", Value: userName, Type: getType(userName) },
  { Label: "userAge", Value: userAge, Type: getType(userAge) },
  { Label: "isStudent", Value: isStudent, Type: getType(isStudent) },
  { Label: "skills", Value: JSON.stringify(skills), Type: getType(skills) },
  { Label: "profile", Value: JSON.stringify(profile), Type: getType(profile) },
  { Label: "middleName", Value: middleName, Type: getType(middleName) },
  { Label: "phoneNumber", Value: phoneNumber, Type: getType(phoneNumber) },
]);