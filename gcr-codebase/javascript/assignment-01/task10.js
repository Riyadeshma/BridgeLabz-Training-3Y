// Q10: Citizen Eligibility Validator

const age = 19;
const isCitizen = true;

if (isCitizen) {
  if (age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
  } else if (age > 20) {
    console.log("Eligible for all services.");
  } else {
    console.log("Not eligible yet.");
  }
} else {
  if (age >= 18) {
    console.log("Only age criteria met.");
  } else {
    console.log("Not eligible yet.");
  }
}