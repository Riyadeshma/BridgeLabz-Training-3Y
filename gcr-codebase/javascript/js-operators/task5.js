// Q5: Boolean Logic Access System

// Different test scenarios to check multiple outcomes
const scenarios = [
  { isDoorLocked: true, isWindowClosed: true, isAlarmOn: true, isOwnerInside: true },   // all conditions met
  { isDoorLocked: false, isWindowClosed: true, isAlarmOn: true, isOwnerInside: true },  // door unlocked
  { isDoorLocked: true, isWindowClosed: false, isAlarmOn: true, isOwnerInside: true },  // window open
  { isDoorLocked: true, isWindowClosed: true, isAlarmOn: false, isOwnerInside: true },  // alarm off
  { isDoorLocked: true, isWindowClosed: true, isAlarmOn: true, isOwnerInside: false },  // owner not inside
];

for (let i = 0; i < scenarios.length; i++) {
  // Extract the variables from the current scenario
  const { isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside } = scenarios[i];

  // Secure only if ALL conditions are true
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

  console.log(`Test ${i + 1}:`, isSecure ? "Secure" : "Unsafe");
}