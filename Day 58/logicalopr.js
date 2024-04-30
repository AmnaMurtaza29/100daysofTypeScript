//Day 58
// Task 1: Set default value using logical OR (||)
let user;
let userName = user || "Anonymous";
console.log(userName); // Output: "Anonymous" since user is undefined

// Task 2: Use logical AND (&&) to check conditions
let hour = 12;
let minute = 30;
if (hour === 12 && minute === 30) {
  console.log('The time is 12:30');
} else {
  console.log('The time is not 12:30');
}
